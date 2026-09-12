import type { ChainKeys } from '@model/Chain/ChainLink';
import { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { DataServiceContext } from '../types';

export function concatWithParent<K extends ChainKeys>(
    this: DataServiceContext,
    task: Task,
    key: K,
): void {
    const parentValue = task._parent[key as keyof DataGroup];
    if(!parentValue) return;

    if(task[key] === undefined) {
        // Exists only on parent
        task[key] = parentValue as any;
    }
    else {
        // Exists on both
        const concated = [];

        if(Array.isArray(parentValue)) concated.push(...parentValue);
        else concated.push(parentValue);

        if(Array.isArray(task[key])) concated.push(...task[key] as any);
        else concated.push(task[key]);

        task[key] = concated as any;
    }
}
