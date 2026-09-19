import type { ChainConstraint } from '@model/Chain/ChainConstraint';
import type { Task } from '@model/Task';

import type { ChainService } from '../chain.service';

/**
 * Handles chain constraints for:
 * cSiblings, cSiblingsAt
 * */
export function getSiblingConstraints(service: ChainService) {
    return (
        task: Task,
    ): ChainConstraint[] => {
        const constraints: ChainConstraint[] = [];

        if(task.cSiblings) {
            const chainedTasks = service.svcData.getTasks(task.cSiblings, task._parent.fullStorageKey);
            constraints.push({
                type: 'MATCH',
                relation: 'cSiblings',
                task,
                chainedTasks,
            });
        }

        if(task.cSiblingsAt) {
            for(const num in task.cSiblingsAt) {
                const chainedTasks = service.svcData.getTasks(
                    task.cSiblingsAt[num],
                    task._parent.fullStorageKey
                );

                constraints.push({
                    type: 'MATCH',
                    relation: 'cSiblingsAt',
                    task,
                    chainedTasks,
                    taskThreshold: parseInt(num),
                    chainThreshold: parseInt(num),
                });
            }
        }

        return constraints;
    };
}
