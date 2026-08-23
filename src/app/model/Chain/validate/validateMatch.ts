import type { ChainConstraint } from '../ChainConstraint';
import {
    isComplete,
    isCompleteOrExcluded,
    isExcluded,
    isIncompleteOrExcluded
} from '../getCompletion';

export function validateMatch(constraint: ChainConstraint): boolean {
    if(isExcluded(constraint.task)) return true;

    if(isComplete(constraint.task, constraint.taskThreshold)) {
        const match = constraint.chainedTasks.every(
            (t) => isCompleteOrExcluded(t, constraint.chainThreshold)
        );

        if(!match) return false;
    }
    else {
        const match = constraint.chainedTasks.every(
            (t) => isIncompleteOrExcluded(t, constraint.chainThreshold)
        );

        if(!match) return false;
    }

    return true;
}
