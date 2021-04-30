const fs = require("fs");

const getSafeName = require('../util/getSafeName');

// Removes excluded items from cache content
module.exports = function removeExcluded(rl, content) {
    const cachePath = `./scripts/xivapi/cache/${getSafeName(content.config.API_ENDPOINT)}`;
    dive(content, cachePath);

    function dive(content, path) {
        const dirs = fs.readdirSync(path);

        dirs.forEach((dir) => {
            const fileName = dir.replace(".json", "");
            const excluded = content.excludedIds ? Object.keys(content.excludedIds) : [];
            const newPath = `${path}/${dir}`;

            if(dir === fileName) dive(content, newPath);
            else if(excluded.includes(fileName)) {
                rl.write(`Removing ${newPath}\n`);
                fs.unlinkSync(newPath);
            }
        });
    }
};
