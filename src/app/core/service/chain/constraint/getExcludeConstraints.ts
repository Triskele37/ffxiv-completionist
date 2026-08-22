import { Task } from '@model/Task';
import { ChainConstraint } from '@model/Chain/ChainConstraint';

import { ChainServiceContext } from '../types';

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
