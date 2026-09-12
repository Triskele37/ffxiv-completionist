import type { JSONResource } from '@model/JSONResource';

import type { DataServiceContext } from '../types';
import type { JSON_GROUP } from './_types';

/**
 * Transform the raw task json to the initial app json (pre-class)
 */
export function mapTasks(
    this: DataServiceContext,
    json: JSON_GROUP,
): JSONResource {
    const tasks: JSONResource = {};
    if(!json.tasks) return tasks;

    for(const [id, rawTask] of Object.entries(json.tasks)) {
        // Don't add 'hidden' tasks so placeholders can be in resources
        if(rawTask.hidden) continue;

        tasks[id] = {
            // Remove the leading "x" and cast to int
            id: parseInt(id.substring(1), 10),
            ...rawTask
        };

        // Replace common keys (ZONE.ULDAH) with translations
        this.loader.translateCommonKeys(tasks[id]);
    }

    return tasks;
}
