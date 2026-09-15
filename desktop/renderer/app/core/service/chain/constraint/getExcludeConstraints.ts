import type { Task } from '@model/Task';
import type { ChainConstraint } from '@model/Chain/ChainConstraint';

import type { ChainService } from '../chain.service';

/**
 * Handles chain constraints for:
 * cExclude
 * */
export function getExcludeConstraints(service: ChainService) {
    return (
        task: Task,
    ): ChainConstraint[] => {
        const constraints: ChainConstraint[] = [];

        if(task.cExclude) {
            const chainedTasks = service.svcData.getTasks(task.cExclude, task._parent.fullStorageKey);
            constraints.push({
                type: 'EXCLUDES',
                relation: 'cExclude',
                task,
                chainedTasks,
            });
        }

        return constraints;
    };
}
