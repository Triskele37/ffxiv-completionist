import { Task } from '@model/Task';
import { getTasks } from '@model/Task/get/getTasks';

import { ChainConstraint } from '../types';

/**
 * Handles chain constraints for:
 * cSiblings, cSiblingsAt
 * */
export function getSiblingConstraints(task: Task): ChainConstraint[] {
    const constraints: ChainConstraint[] = [];

    if(task.cSiblings) {
        const chainedTasks = getTasks(task.cSiblings, task._parent.fullStorageKey);
        constraints.push({
            type: 'MATCH',
            relation: 'cSiblings',
            task,
            chainedTasks,
        });
    }

    if(task.cSiblingsAt) {
        for(const num in task.cSiblingsAt) {
            const chainedTasks = getTasks(task.cSiblingsAt[num], task._parent.fullStorageKey);
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
