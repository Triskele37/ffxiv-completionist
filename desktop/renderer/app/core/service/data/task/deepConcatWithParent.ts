import type { AtLinks } from '@model/Chain/ChainLink';
import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import type { KeysMatching } from '@model/typeUtils';

import type { DataServiceContext } from '../types';

type AtLinkKeys = KeysMatching<DataGroup, AtLinks | undefined>;

export function deepConcatWithParent<K extends AtLinkKeys>(
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
        Object.keys(parentValue).forEach((at) => {
            if(!task[key]) return;

            if(!task[key][at]) task[key][at] = parentValue[at];
            else {
                const concated = [];

                if(Array.isArray(parentValue[at])) concated.push(...parentValue[at]);
                else concated.push(parentValue[at]);

                if(Array.isArray(task[key][at])) concated.push(...task[key][at]);
                else concated.push(task[key][at]);

                task[key][at] = concated;
            }
        });
    }
}
