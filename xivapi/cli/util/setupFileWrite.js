const fs = require("fs");
const getSafeName = require("./getSafeName");

// Creates necessary directories then returns final file name
module.exports = function setupFileWrite(baseDir, nests) {
    let nestDir = `${baseDir}`;

    for(let i = 0; i < nests.length - 1; i++) {
        nestDir += `/${getSafeName(nests[i])}`;
        if(!fs.existsSync(nestDir)) fs.mkdirSync(nestDir);
    }

    return `${nestDir}/${getSafeName(nests[nests.length - 1])}.json`;
};
