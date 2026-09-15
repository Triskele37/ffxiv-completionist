import type { Link } from '@model/Chain/ChainLink';
import { curryParentForNumberLink } from '@model/Link/curry';
import type { Task } from '@model/Task';

import type { DataService } from '../data-service';

/**
 * Retrieve all tasks in and implied by `data`
 * */
export function getTasks(service: DataService) {
    return (
        data: Link | Link[] | undefined,
        siblingTask: Task | string,
    ): Task[] => {
        if(!data) return [];

        const parentPath = typeof siblingTask === 'string' ? siblingTask : siblingTask._parent.fullStorageKey;

        return (Array.isArray(data) ? data : [data])
            .map(curryParentForNumberLink(parentPath))
            .flatMap(service.expandLink)
            .map(service.getTask)
            .filter(Boolean) as Task[];
    };
}
