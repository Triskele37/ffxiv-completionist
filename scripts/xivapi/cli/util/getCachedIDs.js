const fs = require('fs');
const getSafeName = require('./getSafeName');

module.exports = function getCachedIDs(contentType) {
    return dive(`./xivapi/cache/${getSafeName(contentType)}`);
};

function dive(path) {
    const dir = fs.readdirSync(path);

    return dir.reduce((acc, item) => {
        // Push cached json files as IDs
        if(item.indexOf('.json') !== -1) acc.push(item.replace('.json', ''));
        else {
            acc.push(...dive(path + '/' + item));
        }

        return acc;
    }, []);
}
