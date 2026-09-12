import { app } from 'electron';
import fs from 'fs';
import path from 'path';

import { JsonCache } from '../../../common/JsonCache';
import { getResourcesRoot } from '../util/getResourcesRoot';

const CACHE_NAME = 'preloadedData.json';

/**
 * - keys like (logs.orchestrion-list.ambient)
 */
const JSON_CACHE: JsonCache = {
    _version: app.getVersion(),
    data: {}
};

export function loadCache(): boolean {
    const resourceRoot = getResourcesRoot();
    const cachePath = path.join(path.normalize(resourceRoot), CACHE_NAME);

    if(fs.existsSync(cachePath)) {
        try {
            const cachedCache = JSON.parse(fs.readFileSync(cachePath, 'utf8')) as JsonCache;

            if(cachedCache._version === app.getVersion()) {
                JSON_CACHE._version = cachedCache._version;
                for(const k in cachedCache.data) {
                    JSON_CACHE.data[k] = cachedCache.data[k];
                }

                return true;
            }
        }
        catch(e) {
            console.error('Error loading cached cache:', e);
        }
    }

    return false;
}

export function getCache(): JsonCache {
    return JSON_CACHE;
}

export function writeCache(allData: JsonCache['data']) {
    JSON_CACHE.data = allData;

    const resourceRoot = getResourcesRoot();
    const cachePath = path.join(path.normalize(resourceRoot), CACHE_NAME);
    const tmp = `${cachePath}.tmp`

    try {
        fs.writeFileSync(tmp, JSON.stringify(JSON_CACHE));
        fs.renameSync(tmp, cachePath);
    }
    finally {
        if(fs.existsSync(tmp)) {
            fs.unlinkSync(tmp);
        }
    }
}
