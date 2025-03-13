import { getIndexedTask } from '@data/taskIndexes';
import { Task } from '@model/Task';

import { DataGroup } from '../';

export function getChildGroup(group: DataGroup, path: string): DataGroup {
    return getChild(group, path) as DataGroup;
}

export function getChildTask(group: DataGroup, path: string): Task {
    return getChild(group, path) as Task;
}

export function getChild(group: DataGroup, path: string): DataGroup | Task {
    if(typeof path !== 'string') return;

    // Separate pre/post text
    // NOTE: this means pre/post cannot have a period
    const textSegments = path.split(' ');
    const linkPath = textSegments.find((s) => s.includes('.'));
    if(!linkPath) return;

    // Separate the path and id
    const segments = linkPath.split('.');

    // See if link is an indexed one first
    if(segments.length === 2) {
        const indexedTask = getIndexedTask(segments[0], segments[1]);
        if(indexedTask) return indexedTask;
    }

    const id = segments[segments.length - 1].match(/^[0-9]+$/) ?
        parseInt(segments.pop(), 10) : null;

    let cur: DataGroup = group;
    for(const segment of segments) {
        cur = cur.subGroups.get(segment) || cur;
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
