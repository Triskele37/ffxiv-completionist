import type { Task } from '@model/Task';
import type { ChainConstraint } from '@model/Chain/ChainConstraint';

import type { ChainService } from '../chain.service';

export function getTaskConstraints(service: ChainService) {
    return (
        task: Task,
    ): ChainConstraint[] => {
        const constraints: ChainConstraint[] = [];

        constraints.push(...service.getPrevConstraints(task));
        constraints.push(...service.getSiblingConstraints(task));
        constraints.push(...service.getNextConstraints(task));
        constraints.push(...service.getExcludeConstraints(task));

        return constraints;
    };
}
