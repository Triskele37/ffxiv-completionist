import type { Task } from '@model/Task';
import type { ChainConstraint } from '@model/Chain/ChainConstraint';

import type { ChainServiceContext } from '../types';

/**
 * Handles chain constraints for:
 * cExclude
 * */
export function getExcludeConstraints(
    this: ChainServiceContext,
    task: Task,
): ChainConstraint[] {
    const constraints: ChainConstraint[] = [];

    if(task.cExclude) {
        const chainedTasks = this.svcData.get.getTasks(task.cExclude, task._parent.fullStorageKey);
        constraints.push({
            type: 'EXCLUDES',
            relation: 'cExclude',
            task,
            chainedTasks,
        });
    }

    return constraints;
}
