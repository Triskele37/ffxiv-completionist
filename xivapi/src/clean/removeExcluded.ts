import * as fs from 'fs';

import { CACHE_DIR } from '../constants';
import { getSafeName } from '../util/getSafeName';

// Removes excluded items from cache content
export function removeExcluded(rl, content, indentation: string) {
    const cachePath = `${CACHE_DIR}/${getSafeName(content.Name)}`;
    dive(cachePath);

    function dive(path: string): void {
        const dirs = fs.existsSync(path) ? fs.readdirSync(path) : [];

        dirs.forEach((dir) => {
            const fileName = dir.replace('.json', '');
            const newPath = `${path}/${dir}`;

            if(dir === fileName) dive(newPath);
            else {
                const excluded = content.excludedIds ? Object.keys(content.excludedIds) : [];
                if(excluded.includes(fileName)) {
                    rl.write(`${indentation}Removing ${newPath}\n`);
                    fs.unlinkSync(newPath);
                }
            }
        });
    }
}
