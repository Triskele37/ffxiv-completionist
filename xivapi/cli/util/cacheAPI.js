const axios = require('axios');
const logUpdate = require('log-update');

const getContentIDs = require('./getContentIDs');
const getCachedIDs = require('./getCachedIDs');
const concurrentWorkers = require('./concurrentWorkers');
const isValidCacheConfig = require('./isValidCacheConfig');
const writeJsonFile = require('./writeJsonFile');

module.exports = async function cacheAPI(config, additionalSegmentCallback, done) {
    console.log(`Initializing ${config.API_ENDPOINT} cache\n`);

    // Fail fast for invalid configs
    if(!isValidCacheConfig(config, additionalSegmentCallback)) {
        done();
        return;
    }

    // Retrieve the list of IDs to grab
    const IDS = await getIdList(config);

    // Bail if nothing needs to be grabbed
    if(!IDS.length) {
        console.log('No new items to cache');
        done();
        return;
    }

    // Do the actual grabbing
    await getItems(config, IDS);
    resultOutput(config, IDS);

    // Write cache config updates
    console.log(`Updating config for ${config.API_ENDPOINT}`);
    writeJsonFile('./xivapi/cli', [config.API_ENDPOINT], 'config', config);

    done();
};

/**-----------------------------------------------------------------------------
 * Used to determine a list of IDs to grab from a contentType
 * ----------------------------------------------------------------------------- */
async function getIdList(config) {
    if(config.NEW_SCRAPE) {
        const allIDs = await getContentIDs(config.API_ENDPOINT);
        const cachedIDs = getCachedIDs(config.API_ENDPOINT);
        config.TOTAL_ITEMS = allIDs.length;

        const newIDs = allIDs.filter((ID) => !cachedIDs.includes(ID.toString()));
        console.log(`${newIDs.length} new items detected`);

        return newIDs;
    }
    else if(config.FULL_SCRAPE) {
        const allIDs = await getContentIDs(config.API_ENDPOINT);
        config.TOTAL_ITEMS = allIDs.length;

        return allIDs;
    }
    else if(config.FAILED_SCRAPE) {
        const temp = [...config.FAILED_IDS];
        config.FAILED_IDS = [];
        return temp;
    }
}

/**-----------------------------------------------------------------------------
 * Fires off several concurrent calls on a timeout to get all items
 * ----------------------------------------------------------------------------- */
async function getItems(config, IDS) {
    await concurrentWorkers((cur, resolve) => {
        if(cur.value < IDS.length) {
            let output = `\nRetrieving item ${cur.value + 1}/${IDS.length}`;
            if(config.FAILED_IDS.length) output += `\n${config.FAILED_IDS.length} items failed`;

            logUpdate(output);

            return getItem(config, IDS[cur.next]);
        }
        else resolve();
    });
}

/**-----------------------------------------------------------------------------
 * The grab of a single item, does the cache write
 * ----------------------------------------------------------------------------- */
async function getItem(config, id) {
    // Bail out if trying to get a non-existent ID
    if(!id) return;

    // Bail out for excluded IDs
    if(config.EXCLUDE_IDS.indexOf(id) !== -1) return;

    try {
        // Attempt to grab the item's data
        const { data } = await axios.get(`http://xivapi.com/${config.API_ENDPOINT}/${id}`);

        let additionalSegments;
        try { additionalSegments = config.additionalSegmentCallback(data); }
        catch(e) { additionalSegments = ['_error']; }

        writeJsonFile(`./xivapi/cache`, [
            config.API_ENDPOINT,
            ...additionalSegments
        ], data.ID, data);
    }
    catch(e) {
        config.FAILED_IDS.push(id);
    }
}

/**-----------------------------------------------------------------------------
 * Completion output
 * ----------------------------------------------------------------------------- */
function resultOutput(config, IDS) {
    config.FAILED_IDS.sort((a, b) => a - b);

    if(config.NEW_SCRAPE) console.log(`Scrape for new data complete`);
    else if(config.FULL_SCRAPE) console.log(`Full scrape complete`);
    else if(config.FAILED_SCRAPE) console.log(`Scrape for previous failures complete`);

    const successful = IDS.length - config.FAILED_IDS.length;
    console.log(`${successful}/${IDS.length} successful, ${config.FAILED_IDS.length} failed\n`);
}
