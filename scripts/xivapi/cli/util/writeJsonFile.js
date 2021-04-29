const fs = require("fs");
const getSafeName = require('./getSafeName');

// Ensures that a json file gets written by creating directories when necessary
module.exports = function writeJsonFile(baseDir, pathSegments, fileName, json) {
    let fullPath = `${baseDir}`;

    for(let i = 0; i < pathSegments.length; i++) {
        // Add to the fullPath used to write the file
        fullPath += `/${getSafeName(pathSegments[i])}`;

        // Create the current directory if it does not exist
        if(!fs.existsSync(fullPath)) fs.mkdirSync(fullPath);
    }

    // Add the fileName to the fullPath
    fullPath += `/${fileName.toString()}.json`;

    fs.writeFileSync(fullPath, JSON.stringify(json, null, 4));
};
