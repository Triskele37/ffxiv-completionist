import * as fs from 'fs';
import logUpdate from 'log-update';

import { CACHE_DIR } from '../constants';
import { cleanTaskValues } from './cleanTaskValues';
import { Content } from '../domain/Content';

export type CacheGroup = { [key: string]: CacheGroup } & {
    keys: string[];
    tasks: any[];
};

export function buildAPI(content: Content): CacheGroup {
    const output: CacheGroup = { keys: [], tasks: [] } as CacheGroup;

    const contentDir = `${CACHE_DIR}/${content.Name}`;
    dive(content, contentDir, output);

    return output;
}

function dive(content: Content, path: string, group: CacheGroup): void {
    // Iterate the current directory
    fs.readdirSync(path).forEach((item) => {
        // Bail from building _error directory
        if(item.includes('_')) return;

        const itemPath = `${path}/${item}`;
        if(fs.lstatSync(itemPath).isDirectory()) {
            addGroup(content, itemPath, item, group);
        }
        else {
            addTasks(content, itemPath, group);
        }
    });

    sortTasks(group);
}

function addGroup(content: Content, path: string, groupKey: string, group: CacheGroup): void {
    logUpdate(`Building ${path}`);

    // Add current directory as a key then dive
    group[groupKey] = { keys: [], tasks: [] } as CacheGroup;
    group.keys.push(groupKey);

    dive(content, path, group[groupKey]);
}

function addTasks(content: Content, path: string, group: CacheGroup): void {
    // Build tasks from the cached data
    const cachedFile = JSON.parse(fs.readFileSync(path, 'utf8'));
    const cacheTaskOrTasks = content.mapCacheTask(cachedFile);

    // mapCacheTasks can either return a single task or multiple
    if(Array.isArray(cacheTaskOrTasks)) {
        cacheTaskOrTasks.forEach((cacheTask) => {
            cleanTaskValues(cacheTask);
            group.tasks.push(cacheTask);
        });
    }
    else {
        cleanTaskValues(cacheTaskOrTasks);
        group.tasks.push(cacheTaskOrTasks);
    }
}

// Try to sort if XIVAPI came with a sort order
//NOTE: Rename any sort key to "Order" when mapping cache tasks
function sortTasks(group: CacheGroup): void {
    if(group.tasks.length) {
        const hasSortOrder = group.tasks[0].Order ?? false;

        if(hasSortOrder !== false) {
            group.tasks.sort((a, b) =>
                (a.Order === 0 || b.Order === 0) ? a.ID - b.ID : a.Order - b.Order
            );
        }
    }
}
