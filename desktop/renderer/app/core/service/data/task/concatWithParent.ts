import type { Links } from '@model/Chain/ChainLink';
import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import type { KeysMatching } from '@model/typeUtils';

import type { DataServiceContext } from '../types';

type LinkKeys = KeysMatching<DataGroup, Links | undefined>;

export function concatWithParent<K extends LinkKeys>(
    this: DataServiceContext,
    task: Task,
    key: K,
): void {
    const parentValue = task._parent[key];
    if(!parentValue) return;

    if(task[key] === undefined) {
        // Exists only on parent
        task[key] = parentValue;
    }
    else {
        // Exists on both
        const concated = [];

        if(Array.isArray(parentValue)) concated.push(...parentValue);
        else concated.push(parentValue);

        if(Array.isArray(task[key])) concated.push(...task[key] as any);
        else concated.push(task[key]);

        task[key] = concated;
    }
}
