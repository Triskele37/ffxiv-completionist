import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { DataServiceContext } from '../types';

type SharedKey = keyof DataGroup & keyof Task;

export function inheritFromParent<K extends SharedKey>(
    this: DataServiceContext,
    task: Task,
    key: K
): void {
    if(task._parent[key] !== undefined && task[key] === undefined) {
        task[key] = task._parent[key] as Task[K];
    }
}
