import type { ChainConstraint } from '@model/Chain/ChainConstraint';
import type { DataGroup } from '@model/DataGroup';

import type { ChainServiceContext } from '../types';

export function getGroupConstraints(
    this: ChainServiceContext,
    group: DataGroup,
): ChainConstraint[] {
    const constraints: ChainConstraint[] = [];

    this.constraint.diveGroupConstraints(group, constraints);

    return constraints;
}
