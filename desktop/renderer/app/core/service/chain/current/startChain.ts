import { getGroupPath } from '@model/DataGroup/getGroupPath';

import type { ChainService } from '../chain.service';
import type { ChainedTask } from '../types';

export function startChain(service: ChainService) {
    return (
        { task, fromFlag, toFlag }: ChainedTask,
    ): void => {
        const path = getGroupPath(task._parent);
        path.shift();

        service.addHistory();

        service.chainStart.set({
            task,
            fromFlag,
            toFlag,
            path: path.join(' > ')
        });

        service.chainedGroups.set([]);
        service.chainedTaskCount.set(0);

        service.svcConfig.updated$.subscribe(() => service.setHistoryLimit());
    };
}
