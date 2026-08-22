import { Links } from '@model/Chain/ChainLink';
import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { KeysMatching } from '@model/typeUtils';

import { DataServiceContext } from '../types';

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
