import type { Link } from '@model/Chain/ChainLink';
import { curryParentForNumberLink } from '@model/Link/curry';
import type { Task } from '@model/Task';

import type { DataServiceContext } from '../types';

/**
 * Retrieve all tasks in and implied by `data`
 * */
export function getTasks(
    this: DataServiceContext,
    data: Link | Link[] | undefined,
    siblingTask: Task | string,
): Task[] {
    if(!data) return [];

    const parentPath = typeof siblingTask === 'string' ? siblingTask : siblingTask._parent.fullStorageKey;

    return (Array.isArray(data) ? data : [data])
        .map(curryParentForNumberLink(parentPath))
        .flatMap(this.link.expandLink)
        .map(this.get.getTask)
        .filter(Boolean) as Task[];
}
