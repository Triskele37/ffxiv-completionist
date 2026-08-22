import { ChainConstraint } from '@model/Chain/ChainConstraint';
import { DataGroup } from '@model/DataGroup';

import { ChainServiceContext } from '../types';

export function getGroupConstraints(
    this: ChainServiceContext,
    group: DataGroup,
): ChainConstraint[] {
    const constraints: ChainConstraint[] = [];

    this.constraint.diveGroupConstraints(group, constraints);

    return constraints;
}
