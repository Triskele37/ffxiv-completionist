import { Task } from '@model/Task';
import { getTasks } from '@model/Task/get/getTasks';

import { ChainConstraint } from '../types';

/**
 * Handles chain constraints for:
 * cPrev, cPrevAny, cPrevAt, cUnlock
 * */
export function getPrevConstraints(task: Task): ChainConstraint[] {
    const constraints: ChainConstraint[] = [];

    if(task.cPrev) {
        const chainedTasks = getTasks(task.cPrev, task._parent.fullStorageKey);

        if(task.cPrevAny) {
            constraints.push({
                type: 'REQUIRES_ANY',
                relation: 'cPrevAny',
                task,
                chainedTasks,
            });
        }
        else {
            constraints.push({
                type: 'REQUIRES',
                relation: 'cPrev',
                task,
                chainedTasks,
            });
        }
    }

    if(task.cPrevAt) {
        for(const num in task.cPrevAt) {
            const chainedTasks = getTasks(task.cPrevAt[num], task._parent.fullStorageKey);
            constraints.push({
                type: 'REQUIRES',
                relation: 'cPrevAt',
                task,
                chainedTasks,
                taskThreshold: parseInt(num),
            });
        }
    }

    if(task.cUnlock) {
        const chainedTasks = getTasks(task.cUnlock, task._parent.fullStorageKey);
        constraints.push({
            type: 'REQUIRES',
            relation: 'cUnlock',
            task,
            chainedTasks,
        });
    }

    return constraints;
}

