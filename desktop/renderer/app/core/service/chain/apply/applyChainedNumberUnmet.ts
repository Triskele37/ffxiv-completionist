import type { Task } from '@model/Task';
import type { Links } from '@model/Chain/ChainLink';

import type { ChainService } from '../chain.service';

/**
 * Chain when a numeric is not met
 * */
export function applyChainedNumberUnmet(service: ChainService) {
    return (
        task: Task,
        cList: Links,
        num: string,
    ): void => {
        const newNum = (parseInt(num, 10) - 1).toString();
        service.svcData.getTasks(cList, task).forEach(
            (task, i, arr) => service.applyUnmetNumberToTask(newNum, task, arr.length)
        );
    };
}
