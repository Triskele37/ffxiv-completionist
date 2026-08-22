import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';

import { DataServiceContext } from '../types';

type SharedKey = keyof DataGroup & keyof Task;

export function inheritFromParent<K extends SharedKey>(
    this: DataServiceContext,
    task: Task,
    key: K
): void {
    if(task._parent[key] !== undefined && task[key] === undefined) {
        // @ts-ignore
        task[key] = task._parent[key];
    }
}
