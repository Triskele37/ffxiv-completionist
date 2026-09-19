import type { DataService } from '../data-service';
import type { JSON_GROUP } from '../types';

/**
 * Load the group json file at the given path
 */
export function loadJson(service: DataService) {
    return (
        key: string,
    ): JSON_GROUP => {
        let finalJson: JSON_GROUP = {};

        try {
            let json;

            // Check if passed group has a self-named file
            if(service.dataCache?.data[key]) {
                json = service.dataCache.data[key];
                delete service.dataCache.data[key];
            }

            // Check if passed group has/is an index file
            const keyIfIndex = [key, '_index'].filter((p) => p).join('.');
            if(service.dataCache?.data[keyIfIndex]) {
                json = service.dataCache.data[keyIfIndex];
                delete service.dataCache.data[keyIfIndex];
            }

            if(!json) throw new Error('Key not in cache');

            try {
                service.translateCommonKeys(json);
                finalJson = {
                    ...json,
                    columns: service.mapColumns(json),
                    tasks: service.mapTasks(json),
                };
            } catch(e) {
                console.error(`Error processing group: ${key}`, e);
            }
        } catch(e) {
            console.error(`Error loading group: ${key}`, e);
        }

        return finalJson;
    };
}
