const fs = require("fs");

const getSafeName = require("../util/getSafeName");
const constants = require("../../constants");
const writeJsonFile = require('../util/writeJsonFile');

// Attempts to re-cache error'd files
module.exports = function reviewErrors(rl, content) {
    const errorDir = `${constants.CACHE_DIR}/${getSafeName(content.config.API_ENDPOINT)}/_error`;

    if(fs.existsSync(errorDir)) {
        const errors = fs.readdirSync(errorDir);

        errors.forEach((error) => {
            if(content.config.API_ENDPOINT === 'Quest') {
                const errorPath = `${errorDir}/${error}`;
                const file = JSON.parse(fs.readFileSync(errorPath, 'utf8'));

                try {
                    const path = content.getCachePath(file);
                    const pathSegments = [content.config.API_ENDPOINT, ...path];

                    writeJsonFile(constants.CACHE_DIR, pathSegments, file.ID, file);
                    fs.unlinkSync(errorPath);

                    rl.write(`${errorPath} moved from _error\n`);
                }
                catch(e) {
                    if(content.config.API_ENDPOINT === "Quest") {
                        let message = `Unknown Error`;

                        if(!file.JournalGenre) message = `Missing JournalGenre: ${file.Name}`;
                        if(!file.Name) message = "Missing Name";

                        console.log(`${error}: ${message}`);
                    }
                }
            }
        });
    }
};
