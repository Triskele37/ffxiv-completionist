import type { ChainConstraint } from '@model/Chain/ChainConstraint';
import type { Task } from '@model/Task';

import type { ChainServiceContext } from '../types';

/**
 * Handles chain constraints for:
 * cSiblings, cSiblingsAt
 * */
export function getSiblingConstraints(
    this: ChainServiceContext,
    task: Task,
): ChainConstraint[] {
    const constraints: ChainConstraint[] = [];

    if(task.cSiblings) {
        const chainedTasks = this.svcData.get.getTasks(task.cSiblings, task._parent.fullStorageKey);
        constraints.push({
            type: 'MATCH',
            relation: 'cSiblings',
            task,
            chainedTasks,
        });
    }

    if(task.cSiblingsAt) {
        for(const num in task.cSiblingsAt) {
            const chainedTasks = this.svcData.get.getTasks(
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
}
