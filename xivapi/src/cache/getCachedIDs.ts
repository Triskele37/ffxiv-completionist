import * as fs from 'fs';

import { CACHE_DIR } from '../constants';

export function getCachedIDs(contentType: string): string[] {
    const path = `${CACHE_DIR}/${contentType}`;

    if(!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }

    return dive(path);
}

function dive(path: string): string[] {
    return fs.readdirSync(path)
        .reduce((acc, item) => {
            // Push cached json files as IDs
            if(item.indexOf('.json') !== -1) {
                acc.push(item.replace('.json', ''));
            }
            else {
                acc.push(...dive(`${path}/${item}`));
            }

            return acc;
        }, []);
}
