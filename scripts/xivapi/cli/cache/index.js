const axios = require('axios');
const logUpdate = require('log-update');

const getContentIDs = require('./getContentIDs');
const getCachedIDs = require('./getCachedIDs');
const concurrentWorkers = require('./concurrentWorkers');
const writeJsonFile = require('../util/writeJsonFile');
const constants = require("../../constants");

module.exports = async function cacheAPI(content, scrapeType, done) {
    console.log(`Initializing ${content.Name} cache\n`);
    content.scrapeType = scrapeType;

    // Retrieve the list of IDs to grab
    const IDS = await getIdList(content);

    // Bail if nothing needs to be grabbed
    if(!IDS.length) {
        console.log('No new items to cache');
        done();
        return;
    }

    // Do the actual grabbing
    await getItems(content, IDS);
    resultOutput(content, IDS);

    // Write cache config updates
    console.log(`Updating config for ${content.Name}`);
    content.updateConfigFile();

    done();
};

/**-----------------------------------------------------------------------------
 * Used to determine a list of IDs to grab from a contentType
 * ----------------------------------------------------------------------------- */
async function getIdList(content) {
    // Re-attempt failed IDs
    if(content.scrapeType === "fail") {
        const temp = [...content.config.FAILED_IDS];
        content.config.FAILED_IDS = [];
        return temp;
    }
    // Re-grab all content
    else if(content.scrapeType === "full") {
        const allIDs = await getContentIDs(content);
        const excluded = content.excludedIds ? Object.keys(content.excludedIds) : [];
        content.config.TOTAL_ITEMS = allIDs.length;

        return allIDs.filter((ID) => !excluded.includes(ID.toString()));
    }
    // Only grab new IDs
    else if(content.scrapeType === "new") {
        const allIDs = await getContentIDs(content);
        const cachedIDs = getCachedIDs(content.Name);
        content.config.TOTAL_ITEMS = allIDs.length;

        const newIDs = allIDs.filter((ID) => {
            if(cachedIDs.includes(ID.toString())) return false; // Not already cached
            const excluded = content.excludedIds ? Object.keys(content.excludedIds) : []
            return !excluded.includes(ID.toString()); // Not excluded
        });
        console.log(`${newIDs.length} new items detected`);

        return newIDs;
    }
}

/**-----------------------------------------------------------------------------
 * Fires off several concurrent calls on a timeout to get all items
 * ----------------------------------------------------------------------------- */
async function getItems(content, IDS) {
    await concurrentWorkers((cur, resolve) => {
        if(cur.value < IDS.length) {
            let output = `\nRetrieving item ${cur.value + 1}/${IDS.length}`;
            if(content.config.FAILED_IDS.length) output += `\n${content.config.FAILED_IDS.length} items failed`;

            logUpdate(output);

            return getItem(content, IDS[cur.next]);
        }
        else resolve();
    });
}

/**-----------------------------------------------------------------------------
 * The grab of a single item, does the cache write
 * ----------------------------------------------------------------------------- */
async function getItem(content, id) {
    if(!id) return; // Bail out if trying to get a non-existent ID

    try {
        // Attempt to grab the item's data
        const url = content.buildContentURL(id);
        const { data } = await axios.get(url);

        let contentPath;
        try { contentPath = content.getCachePath(data); }
        catch(e) { contentPath = ['_error']; }

        writeJsonFile(constants.CACHE_DIR, [
            content.Name,
            ...contentPath
        ], data.ID, data);
    }
    catch(e) {
        content.config.FAILED_IDS.push(id);
    }
}

/**-----------------------------------------------------------------------------
 * Completion output
 * ----------------------------------------------------------------------------- */
function resultOutput(content, IDS) {
    content.config.FAILED_IDS.sort((a, b) => a - b);

    console.log(`Scrape complete`);

    const successful = IDS.length - content.config.FAILED_IDS.length;
    console.log(`${successful}/${IDS.length} successful, ${content.config.FAILED_IDS.length} failed\n`);
}
