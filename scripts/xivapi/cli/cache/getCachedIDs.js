const fs = require("fs");
const constants = require("../../constants");
const getSafeName = require("../util/getSafeName");

module.exports = function getCachedIDs(contentType) {
    const path = `${constants.CACHE_DIR}/${getSafeName(contentType)}`;

    if(!fs.existsSync(path)) fs.mkdirSync(path);

    return dive(path);
};

function dive(path) {
    const dir = fs.readdirSync(path);

    return dir.reduce((acc, item) => {
        // Push cached json files as IDs
        if(item.indexOf(".json") !== -1) acc.push(item.replace(".json", ""));
        else {
            acc.push(...dive(path + "/" + item));
        }

        return acc;
    }, []);
}
