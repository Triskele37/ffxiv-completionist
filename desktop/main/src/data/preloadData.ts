import { loadCache, writeCache } from './cache';
import { getAllData } from './getAllData';

/**
 * Preload all json asynchronously before the app loads to speed up init time
 * - Keep in memory (~10MB) to completely remove slowdown of file read during app run
 */
export async function preloadData() {
    const cacheLoaded = loadCache();

    if(!cacheLoaded) {
        const allData = await getAllData();
        writeCache(allData);
    }
}
