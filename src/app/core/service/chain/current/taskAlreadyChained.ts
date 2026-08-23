import type { Task } from '@model/Task';

import type { ChainServiceContext } from '../types';

export function taskAlreadyChained(
    this: ChainServiceContext,
    task: Task,
    toFlag: string,
): boolean {
    // Matches start task
    if(this.chainStart()?.task?.fullStorageKey === task.fullStorageKey) {
        return true;
    }

    // Matches embedded chained tasks
    return this.chainedGroups().some((chainedGroup) => {
        const change = chainedGroup.tasks.find(
            (t) => t.task.fullStorageKey === task.fullStorageKey
        );

        if(change?.task.isNumericCompletion) {
            // Allow numeric tasks to chain through if toFlag is greater
            const fromNum = parseInt(change.fromFlag, 10);
            const toNum = parseInt(toFlag, 10);
            return fromNum >= toNum;
        }

        return !!change;
    });
}
