import type { Task } from '@model/Task';
import type { Links } from '@model/Chain/ChainLink';

import type { ChainService } from '../chain.service';

/**
 * Chain when a numeric is met
 * */
export function applyChainedNumberMet(service: ChainService) {
    return (
        task: Task,
        cList: Links,
        num: string,
    ): void => {
        service.svcData.getTasks(cList, task).forEach(
            (task) => service.applyMetNumberToTask(num, task)
        );
    };
}
