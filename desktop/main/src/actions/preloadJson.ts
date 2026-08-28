import * as fs from 'fs';
import * as path from 'path';

/**
 * - keys like (logs.orchestrion-list.ambient)
 */
export const JSON_CACHE: Record<string, object> = {};

/**
 * CachedCache is a PoC, invalidation isn't figured out yet
 * it does reduce preload significantly though
 * */
const DISABLE_CACHED_CACHE = true;

/**
 * Preload all json asynchronously before the app loads to speed up init time
 * - Keep in memory (~10MB) to completely remove slowdown of file read during app run
 */
export async function preloadJson() {
    const resourceRoot = getResourcesRoot();
    const cachePath = path.join(path.normalize(resourceRoot), 'data.json');

    if(DISABLE_CACHED_CACHE || !fs.existsSync(cachePath)) {
        await diveResources(path.normalize(resourceRoot));
        fs.writeFileSync(cachePath, JSON.stringify(JSON_CACHE));
    }
    else {
        const cachedCache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
        for(const k in cachedCache) {
            JSON_CACHE[k] = cachedCache[k];
        }
    }
}

/**
 * Recursively dive the resource directory for json
 */
async function diveResources(root: string, p: string = root): Promise<void> {
    const dir = await fs.promises.readdir(p, { withFileTypes: true });

    await Promise.all(dir.map(async (entity) => {
        const entityPath = path.join(p, entity.name);

        if(entity.isDirectory()) {
            await diveResources(root, entityPath);
        }
        else if(entity.name.endsWith('.json')) {
            const file = await fs.promises.readFile(entityPath, 'utf8');
            const cacheKey = pathToKey(root, entityPath);

            try {
                JSON_CACHE[cacheKey] = JSON.parse(file);
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

/**
 * Get the resource root based on environment
 */
function getResourcesRoot() {
    const isDev = process.resourcesPath.includes('electron') &&
        process.resourcesPath.includes('node_modules');

    return isDev
        ? path.join('..', 'resources') // relative to main.ts
        : path.join(process.resourcesPath, 'resources');
}
