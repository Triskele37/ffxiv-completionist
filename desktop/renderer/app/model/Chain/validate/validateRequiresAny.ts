import type { ChainConstraint } from '../ChainConstraint';
import { isComplete, isExcluded } from '../getCompletion';

export function validateRequiresAny(constraint: ChainConstraint): boolean {
    if(!isComplete(constraint.task, constraint.taskThreshold)) return true;

    if(constraint.chainedTasks.some((t) => isComplete(t, constraint.chainThreshold))) {
        return true;
    }

    return constraint.chainedTasks.every(isExcluded);
}
