import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';

import { DataServiceContext } from '../types';

/**
 * Overload for `getChild` to type assert `Task`
 * */
export function getChildTask(
    this: DataServiceContext,
    sourceGroup: DataGroup | null,
    path: string,
): Task | null {
    const task = this.get.getChild(sourceGroup, path);

    if(!task) {
        this.get.logGetMiss('task', path, sourceGroup?.fullStorageKey);
        return null;
    }
    else if(task.dataType !== 'Task') {
        console.error(`Retrieved Group at "${path}" when looking for Task "${sourceGroup?.fullStorageKey}"`);
        return null;
    }

    return task;
}
