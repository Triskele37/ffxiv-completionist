const fs = require("fs");

const constants = require("../../constants");
const writeJsonFile = require('../util/writeJsonFile');

// Attempts to re-cache error'd files
module.exports = function reviewErrors(rl, content, indentation) {
    const errorDir = `${constants.CACHE_DIR}/${content.Name}/_error`;

    if(fs.existsSync(errorDir)) {
        const errors = fs.readdirSync(errorDir);

        errors.forEach((error) => {

            switch(content.Name) {
                case 'Quest': retryQuestErrors(error); break;
                default: retryDefaultError(error);
            }
        });
    }

    function retryQuestErrors(error) {
        const errorPath = `${errorDir}/${error}`;
        const file = JSON.parse(fs.readFileSync(errorPath, 'utf8'));

        try {
            const path = content.getCachePath(file);
            const pathSegments = [content.Name, ...path];

            writeJsonFile(constants.CACHE_DIR, pathSegments, file.ID, file);
            fs.unlinkSync(errorPath);

            rl.write(`${indentation}${errorPath} moved from _error\n`);
        }
        catch(e) {
            let message = `Unknown Error`;

            if(!file.JournalGenre) message = `Missing JournalGenre: ${file.Name}`;
            if(!file.Name) message = "Missing Name";

            rl.write(`${indentation}${error}: ${message}\n`);
        }
    }

    function retryDefaultError(error) {
        // const errorPath = `${errorDir}/${error}`;
        // const file = JSON.parse(fs.readFileSync(errorPath, 'utf8'));

        try {
            // const path = content.getCachePath(file);
            // const pathSegments = [content.Name, ...path];

            // writeJsonFile(constants.CACHE_DIR, pathSegments, file.ID, file);
            // fs.unlinkSync(errorPath);

            // rl.write(`${indentation}${errorPath} moved from _error\n`);
        }
        catch(e) {
            rl.write(e);
            // rl.write(`${indentation}${error}: ${message}\n`);
        }
    }
};
