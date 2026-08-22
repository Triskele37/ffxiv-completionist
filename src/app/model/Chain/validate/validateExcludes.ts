import { ChainConstraint } from '../ChainConstraint';
import { isComplete, isExcluded } from '../getCompletion';

export function validateExcludes(constraint: ChainConstraint): boolean {
    if(!isComplete(constraint.task, constraint.taskThreshold)) return true;
    return constraint.chainedTasks.every(isExcluded);
}
