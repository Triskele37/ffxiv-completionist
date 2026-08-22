import { Task } from '@model/Task';
import { getTasks } from '@model/Task/get/getTasks';

import { ChainConstraint } from '../types';

/**
 * Handles chain constraints for:
 * cExclude
 * */
export function getExcludeConstraints(task: Task): ChainConstraint[] {
    const constraints: ChainConstraint[] = [];

    if(task.cExclude) {
        const chainedTasks = getTasks(task.cExclude, task._parent.fullStorageKey);
        constraints.push({
            type: 'EXCLUDES',
            relation: 'cExclude',
            task,
            chainedTasks,
        });
    }

    return constraints;
}
