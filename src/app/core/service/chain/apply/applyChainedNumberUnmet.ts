import type { Task } from '@model/Task';
import type { Links } from '@model/Chain/ChainLink';

import type { ChainServiceContext } from '../types';

/**
 * Chain when a numeric is not met
 * */
export function applyChainedNumberUnmet(
    this: ChainServiceContext,
    task: Task,
    cList: Links,
    num: string,
): void {
    const newNum = (parseInt(num, 10) - 1).toString();
    this.svcData.get.getTasks(cList, task).forEach(
        (task, i, arr) => this.apply.applyUnmetNumberToTask(newNum, task, arr.length)
    );
}
