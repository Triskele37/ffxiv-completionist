import type { KeysOfType } from '@common/typeUtils';
import type { AtLinks } from '@model/Chain/ChainLink';
import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { DataService } from '../data-service';

type AtLinkKeys = KeysOfType<DataGroup, AtLinks | undefined>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function deepConcatWithParent<K extends AtLinkKeys>(service: DataService) {
    return (
        task: Task,
        key: K,
    ): void => {
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
    };
}
