import { Task } from '@model/Task';
import { getTasks } from '@model/Task/get/getTasks';

import { applyUnmetNumberToTask } from '../applyFlag/applyUnmetNumberToTask';
import { Links } from '../ChainLink';

// Chain when a numeric is not met
export function applyChainedNumberUnmet(task: Task, cList: Links, num: string): void {
    const newNum = (parseInt(num, 10) - 1).toString();
    getTasks(cList, task).forEach(
        (task, i, arr) => applyUnmetNumberToTask(newNum, task, arr.length)
    );
}
