import fs from 'fs';
import path from 'path';

import { JsonCache } from '../../../common/JsonCache';
import { getResourcesRoot } from '../util/getResourcesRoot';

export async function getAllData() {
    const resourceRoot = getResourcesRoot();
    const dataRoot = path.join(path.normalize(resourceRoot), 'data');

    const data = {};
    await diveResources(data, dataRoot);

    return data;
}

/**
 * Recursively dive the resource directory for json
 */
async function diveResources(
    data: JsonCache['data'],
    root: string,
    p: string = root,
): Promise<void> {
    const dir = await fs.promises.readdir(p, { withFileTypes: true });

    await Promise.all(dir.map(async (entity) => {
        const entityPath = path.join(p, entity.name);

        if(entity.isDirectory()) {
            await diveResources(data, root, entityPath);
        }
        else if(entity.name.endsWith('.json')) {
            const file = await fs.promises.readFile(entityPath, 'utf8');
            const cacheKey = pathToKey(root, entityPath);

            try {
                data[cacheKey] = JSON.parse(file);
            }
            catch(e) {
                console.error(`Error Loading: ${entityPath}`);
                console.error(e);
            }
        }
    }));
}

/**
 * I am once again asking you to convert a path to an app key
 */
function pathToKey(root: string, p: string): string {
    return p
        .replace(root, '') // Remove the root resource segment/s
        .replace('.json', '') // Remove the json ending
        .split(path.sep) // Split so we can join on a different character
        .filter((pp) => pp) // Remove empty pieces
        .join('.');
}
