import { isComplete, isCompleteOrExcluded } from '../getCompletion';
import { ChainConstraint } from '../ChainConstraint';

export function validateRequires(constraint: ChainConstraint): boolean {
    if(!isComplete(constraint.task, constraint.taskThreshold)) return true;

    return constraint.chainedTasks.every(
        (t) => isCompleteOrExcluded(t, constraint.chainThreshold)
    );
}
