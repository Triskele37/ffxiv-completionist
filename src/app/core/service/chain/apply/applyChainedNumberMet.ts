import { Task } from '@model/Task';
import { Links } from '@model/Chain/ChainLink';

import { ChainServiceContext } from '../types';

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
