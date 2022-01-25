import * as fs from 'fs';

import { mkDirTo } from './mkDirTo';

// Ensures that a json file gets written by creating directories when necessary
export function writeJsonFile(baseDir, pathSegments, fileName, json) {
    let fullPath = mkDirTo(pathSegments, baseDir);

    // Add the fileName to the fullPath
    fullPath += `/${fileName.toString()}.json`;

    fs.writeFileSync(fullPath, JSON.stringify(json, null, 4));
}
