import type { ChainConstraint } from '@model/Chain/ChainConstraint';
import type { DataGroup } from '@model/DataGroup';

import type { ChainService } from '../chain.service';

export function getGroupConstraints(service: ChainService) {
    return (
        group: DataGroup,
    ): ChainConstraint[] => {
        const constraints: ChainConstraint[] = [];

        service.diveGroupConstraints(group, constraints);

        return constraints;
    };
}
