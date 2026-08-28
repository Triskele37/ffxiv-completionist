import type { DataServiceContext } from '../types';
import type { JSON_GROUP } from './_types';

/**
 * Load the group json file at the given path
 */
export function loadJson(
    this: DataServiceContext,
    key: string,
): JSON_GROUP {
    let finalJson: JSON_GROUP = {};

    try {
        let json;

        // Check if passed group has a self-named file
        if(this.loader.dataCache[key]) {
            json = this.loader.dataCache[key];
            delete this.loader.dataCache[key];
        }

        // Check if passed group has/is an index file
        const keyIfIndex = [key, '_index'].filter((p) => p).join('.');
        if(this.loader.dataCache[keyIfIndex]) {
            json = this.loader.dataCache[keyIfIndex];
            delete this.loader.dataCache[keyIfIndex];
        }

        if(!json) throw new Error('Key not in cache');

        try {
            this.loader.translateCommonKeys(json);
            finalJson = {
                ...json,
                columns: this.loader.mapColumns(json),
                tasks: this.loader.mapTasks(json),
            };
        }
        catch(e) {
            console.error(`Error processing group: ${key}`, e);
        }
    }
    catch(e) {
        console.error(`Error loading group: ${key}`, e);
    }

    return finalJson;
}
