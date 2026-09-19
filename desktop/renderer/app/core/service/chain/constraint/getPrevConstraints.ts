import type { ChainConstraint } from '@model/Chain/ChainConstraint';
import type { Task } from '@model/Task';

import type { ChainService } from '../chain.service';

/**
 * Handles chain constraints for:
 * cPrev, cPrevAny, cPrevAt, cUnlock
 * */
export function getPrevConstraints(service: ChainService) {
    return (
        task: Task,
    ): ChainConstraint[] => {
        const constraints: ChainConstraint[] = [];

        if(task.cPrev) {
            const chainedTasks = service.svcData.getTasks(
                task.cPrev,
                task._parent.fullStorageKey
            );

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
                const chainedTasks = service.svcData.getTasks(
                    task.cPrevAt[num],
                    task._parent.fullStorageKey
                );

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
            const chainedTasks = service.svcData.getTasks(
                task.cUnlock,
                task._parent.fullStorageKey
            );

            constraints.push({
                type: 'REQUIRES',
                relation: 'cUnlock',
                task,
                chainedTasks,
            });
        }

        return constraints;
    };
}

