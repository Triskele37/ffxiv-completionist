import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import { getIndexedTask } from '@model/Task/get/getIndexedTask';

/**
 * ALL Group/Task gets should run through this method
 * */
export function getChild(
    group: DataGroup | null | undefined,
    path: string,
): DataGroup | Task | null {
    if(!group) {
        console.error(`Error: Attempted to dive empty group with: ${path}`);
        return null;
    }

    if(typeof path !== 'string') return null;

    // Separate the path and id
    const segments = path.split('.');

    // See if link is indexed first
    if(segments.length === 2) {
        const indexedTask = getIndexedTask(segments[0], segments[1]);
        if(indexedTask) return indexedTask;
    }

    const id = segments[segments.length - 1].match(/^[0-9]+$/) ?
        parseInt(segments.pop() ?? '', 10) : null;

    let cur: DataGroup = group;
    for(const segment of segments) {
        cur = cur.subGroups?.get(segment) || cur;
    }

    // No id means a group was requested
    if(id === null) {
        // Same group means path didn't work
        return cur !== group ? cur : null;
    }

    // Look for the task in this group
    for(const task of cur.tasks) {
        if(task.id === id) return task;
    }

    return null;
}
