import * as fs from 'fs';
import * as path from 'path';

import { getSafeName } from './getSafeName';

export function mkDirTo(pathOrSegments: string | string[], base?: string): string {
    let fullPath = base || '';

    // Force the parameter to a string[] of segments
    const segments = typeof pathOrSegments === 'string' ? pathOrSegments.split('/') : pathOrSegments;

    // Pop off the file if it was passed
    if(segments[segments.length - 1].indexOf('.') !== -1) segments.pop();

    // Shift upward directory into fullPath
    while(segments[0] && segments[0] === '..') {
        fullPath = path.join(segments.shift());
    }

    // Loop through each segment ensuring its created
    segments.forEach((segment) => {
        // Add to the fullPath used to write the file
        fullPath = path.join(fullPath, getSafeName(segment));

        // Create the current directory if it does not exist
        if(!fs.existsSync(fullPath)) fs.mkdirSync(fullPath);
    });

    return fullPath;
}
