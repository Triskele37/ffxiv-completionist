import { isComplete, isExcluded } from '../getCompletion';
import { ChainConstraint } from '../types';

export function validateExcludes(constraint: ChainConstraint): boolean {
    if(!isComplete(constraint.task, constraint.taskThreshold)) return true;
    return constraint.chainedTasks.every(isExcluded);
}
