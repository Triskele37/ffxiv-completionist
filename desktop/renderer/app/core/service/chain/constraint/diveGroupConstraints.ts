import type { ChainConstraint } from '@model/Chain/ChainConstraint';
import type { DataGroup } from '@model/DataGroup';

import type { ChainService } from '../chain.service';

export function diveGroupConstraints(service: ChainService) {
    return (
        group: DataGroup | null,
        constraints: ChainConstraint[]
    ): void => {
        if(!group || group.type !== 'Data') return;

        group.tasks?.forEach((task) => {
            constraints.push(...service.getTaskConstraints(task));
        });

        group.subGroups?.forEach((subGroup) => {
            service.diveGroupConstraints(subGroup, constraints);
        });
    };
}
