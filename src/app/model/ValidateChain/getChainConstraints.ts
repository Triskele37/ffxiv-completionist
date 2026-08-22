import { DataGroup } from '@model/DataGroup';

import { getConstraints } from './constraints/getConstraints';
import { ChainConstraint } from './types';

export function getChainConstraints(group: DataGroup): ChainConstraint[] {
    const constraints: ChainConstraint[] = [];

    dive(group, constraints);

    return constraints;
}

function dive(group: DataGroup | null, constraints: ChainConstraint[]): void {
    if(!group || group.isBookmarkGroup || group.isCustomGroup) return;

    group.tasks?.forEach((task) => {
        constraints.push(...getConstraints(task));
    });

    group.subGroups?.forEach((subGroup) => {
        dive(subGroup, constraints);
    });
}
