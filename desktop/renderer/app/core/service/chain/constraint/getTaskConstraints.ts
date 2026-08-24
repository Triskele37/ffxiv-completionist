import type { Task } from '@model/Task';
import type { ChainConstraint } from '@model/Chain/ChainConstraint';

import type { ChainServiceContext } from '../types';

export function getTaskConstraints(
    this: ChainServiceContext,
    task: Task,
) {
    const constraints: ChainConstraint[] = [];

    constraints.push(...this.constraint.getPrevConstraints(task));
    constraints.push(...this.constraint.getSiblingConstraints(task));
    constraints.push(...this.constraint.getNextConstraints(task));
    constraints.push(...this.constraint.getExcludeConstraints(task));

    return constraints;
}
