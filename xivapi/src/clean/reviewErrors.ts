import * as fs from 'fs';

import { CACHE_DIR } from '../constants';
import { writeJsonFile } from '../util/writeJsonFile';

type Params = {
    rl;
    content;
    dir: string;
    indentation: string;
};

// Attempts to re-cache error'd files
export function reviewErrors(rl, content, indentation: string): void {
    const params: Params = {
        rl, content, indentation,
        dir: `${CACHE_DIR}/${content.Name}/_error`
    };

    if(fs.existsSync(params.dir)) {
        const errors = fs.readdirSync(params.dir);

        errors.forEach((error) => {
            switch(content.Name) {
                case 'Quest':
                    retryQuestErrors(params, error);
                    break;
                default:
                    retryDefaultError(params, error);
            }
        });
    }
}

function retryQuestErrors(params: Params, error: string): void {
    const errorPath = `${params.dir}/${error}`;
    const file = JSON.parse(fs.readFileSync(errorPath, 'utf8'));

    try {
        const path = params.content.getCachePath(file);
        const pathSegments = [params.content.Name, ...path];

        writeJsonFile(CACHE_DIR, pathSegments, file.ID, file);
        fs.unlinkSync(errorPath);

        params.rl.write(`${params.indentation}${errorPath} moved from _error\n`);
    } catch(e) {
        let message = `Unknown Error`;

        if(!file.JournalGenre) message = `Missing JournalGenre: ${file.Name}`;
        if(!file.Name) message = 'Missing Name';

        params.rl.write(`${params.indentation}${error}: ${message}\n`);
    }
}

function retryDefaultError(params: Params, error): void {
    // const errorPath = `${errorDir}/${error}`;
    // const file = JSON.parse(fs.readFileSync(errorPath, 'utf8'));

    try {
        // const path = content.getCachePath(file);
        // const pathSegments = [content.Name, ...path];

        // writeJsonFile(constants.CACHE_DIR, pathSegments, file.ID, file);
        // fs.unlinkSync(errorPath);

        // rl.write(`${indentation}${errorPath} moved from _error\n`);
    } catch(e) {
        params.rl.write(e);
        // rl.write(`${indentation}${error}: ${message}\n`);
    }
}
