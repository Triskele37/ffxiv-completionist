import type { ChainConstraint } from '@model/Chain/ChainConstraint';
import type { DataGroup } from '@model/DataGroup';

import type { ChainServiceContext } from '../types';

export function diveGroupConstraints(
    this: ChainServiceContext,
    group: DataGroup | null,
    constraints: ChainConstraint[]
): void {
    if(!group || group.isBookmarkGroup || group.isCustomGroup) return;

    group.tasks?.forEach((task) => {
        constraints.push(...this.constraint.getTaskConstraints(task));
    });

    group.subGroups?.forEach((subGroup) => {
        this.constraint.diveGroupConstraints(subGroup, constraints);
    });
}
