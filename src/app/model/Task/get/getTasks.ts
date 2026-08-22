import { Link } from '@model/Chain/ChainLink';
import { curryParentForNumberLink } from '@model/Link/curry';
import { expandLink } from '@model/Link/expandLink';
import { Task } from '@model/Task';
import { getTask } from '@model/Task/get/getTask';

export function getTasks(
    data: Link | Link[] | undefined,
    parent: Task | string,
): Task[] {
    if(!data) return [];

    const parentPath = typeof parent === 'string' ? parent : parent._parent.fullStorageKey;

    return (Array.isArray(data) ? data : [data])
        .map(curryParentForNumberLink(parentPath))
        .flatMap(expandLink)
        .map(getTask)
        .filter(Boolean) as Task[];
}
