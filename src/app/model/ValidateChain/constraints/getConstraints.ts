import { Task } from '@model/Task';

import { getPrevConstraints } from './getPrevConstraints';
import { getSiblingConstraints } from './getSiblingConstraints';
import { getNextConstraints } from './getNextConstraints';
import { getExcludeConstraints } from './getExcludeConstraints';
import { ChainConstraint } from '../types';

export function getConstraints(task: Task) {
    const constraints: ChainConstraint[] = [];

    constraints.push(...getPrevConstraints(task));
    constraints.push(...getSiblingConstraints(task));
    constraints.push(...getNextConstraints(task));
    constraints.push(...getExcludeConstraints(task));

    return constraints;
}
