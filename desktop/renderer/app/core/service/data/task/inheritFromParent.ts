import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { DataService } from '../data-service';

type SharedKey = keyof DataGroup & keyof Task;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function inheritFromParent<K extends SharedKey>(service: DataService) {
    return (
        task: Task,
        key: K
    ): void => {
        if(task._parent[key] !== undefined && task[key] === undefined) {
            task[key] = task._parent[key] as Task[K];
        }
    };
}
