import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { DataService } from '../data-service';

/**
 * Overload for `getChild` to type assert `Task`
 * */
export function getChildTask(service: DataService) {
    return (
        sourceGroup: DataGroup | null,
        path: string,
    ): Task | null => {
        const task = service.getChild(sourceGroup, path);

        if(!task) {
            service.logGetMiss('task', path, sourceGroup?.fullStorageKey);
            return null;
        }
        else if(task.dataType !== 'Task') {
            console.error(`Retrieved Group at "${path}" when looking for Task "${sourceGroup?.fullStorageKey}"`);
            return null;
        }

        return task;
    };
}
