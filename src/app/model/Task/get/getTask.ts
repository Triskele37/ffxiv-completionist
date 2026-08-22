import { Globals } from '@constant/Global';
import { getChild, ignoreGetMiss } from '@model/util/getChild';
import { Task } from '@model/Task';
import { DataGroup } from '@model/DataGroup';

/**
 * Overload for `getChild` to type assert `Task`
 * */
export function getChildTask(
    group: DataGroup | null | undefined,
    path: string
): Task {
    const task = getChild(group, path) as Task;

    if(!task && !ignoreGetMiss(path)) {
        console.error(`Invalid task path "${path}" from source ${group?.fullStorageKey}`);
    }

    return task;
}

/**
 * Helper for `getChildTask` when lookup is from root
 * */
export function getTask(path: string): Task | undefined {
    if(!Globals.allData) {
        console.error('Error: Data not initialized');
        return;
    }

    return getChildTask(Globals.allData, path);
}
