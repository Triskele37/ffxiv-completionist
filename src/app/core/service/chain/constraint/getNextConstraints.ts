import { ChainConstraint } from '@model/Chain/ChainConstraint';
import { Task } from '@model/Task';

import { ChainServiceContext } from '../types';

/**
 * Handles chain constraints for:
 * cNext, cCombo, cComboAt, cUnlocks
 * */
export function getNextConstraints(
    this: ChainServiceContext,
    task: Task,
): ChainConstraint[] {
    const constraints: ChainConstraint[] = [];

    if(task.cNext) {
        const chainedTasks = this.svcData.get.getTasks(task.cNext, task._parent.fullStorageKey);
        for(const chainedTask of chainedTasks) {
            constraints.push({
                type: 'REQUIRES',
                relation: 'cNext',
                task: chainedTask,
                chainedTasks: [task],
            });
        }
    }

    if(task.cCombo) {
        const chainedTasks = this.svcData.get.getTasks(task.cCombo, task._parent.fullStorageKey);
        for(const chainedTask of chainedTasks) {
            constraints.push({
                type: 'REQUIRES',
                relation: 'cCombo',
                task: chainedTask,
                chainedTasks: [task],
            });
        }
    }

    if(task.cComboAt) {
        for(const num in task.cComboAt) {
            const chainedTasks = this.svcData.get.getTasks(task.cComboAt[num], task._parent.fullStorageKey);
            for(const chainedTask of chainedTasks) {
                constraints.push({
                    type: 'REQUIRES',
                    relation: 'cComboAt',
                    task: chainedTask,
                    chainedTasks: [task],
                    chainThreshold: parseInt(num),
                });
            }
        }
    }

    if(task.cUnlocks && task.cPrev) {
        const prevTasks = this.svcData.get.getTasks(task.cPrev, task._parent.fullStorageKey)
        const unlocksTasks = this.svcData.get.getTasks(task.cUnlocks, task._parent.fullStorageKey);

        for(const unlockTask of unlocksTasks) {
            constraints.push({
                type: 'REQUIRES',
                relation: 'cUnlocks',
                task: unlockTask,
                chainedTasks: prevTasks,
            });
        }
    }

    return constraints;
}
