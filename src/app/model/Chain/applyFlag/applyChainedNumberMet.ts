import { Task } from '@model/Task';
import { getTasks } from '@model/Task/get/getTasks';

import { applyMetNumberToTask } from '../applyFlag/applyMetNumberToTask';
import { Links } from '../ChainLink';

// Chain when a numeric is met
export function applyChainedNumberMet(task: Task, cList: Links, num: string): void {
    getTasks(cList, task).forEach(
        (task) => applyMetNumberToTask(num, task)
    );
}
