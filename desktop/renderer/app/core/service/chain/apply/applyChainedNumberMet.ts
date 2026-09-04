import type { Task } from '@model/Task';
import type { Links } from '@model/Chain/ChainLink';

import type { ChainServiceContext } from '../types';

/**
 * Chain when a numeric is met
 * */
export function applyChainedNumberMet(
    this: ChainServiceContext,
    task: Task,
    cList: Links,
    num: string,
): void {
    this.svcData.get.getTasks(cList, task).forEach(
        (task) => this.apply.applyMetNumberToTask(num, task)
    );
}
