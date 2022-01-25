import * as fs from 'fs';

import { getSafeName } from '../util/getSafeName';

// Removes excluded items from cache content
export function removeExcluded(rl, content, indentation) {
    const cachePath = `./scripts/xivapi/cache/${getSafeName(content.Name)}`;
    dive(cachePath);

    function dive(path) {
        const dirs = fs.existsSync(path) ? fs.readdirSync(path) : [];

        dirs.forEach((dir) => {
            const fileName = dir.replace('.json', '');
            const excluded = content.excludedIds ? Object.keys(content.excludedIds) : [];
            const newPath = `${path}/${dir}`;

            if(dir === fileName) dive(newPath);
            else if(excluded.includes(fileName)) {
                rl.write(`${indentation}Removing ${newPath}\n`);
                fs.unlinkSync(newPath);
            }
        });
    }
}
