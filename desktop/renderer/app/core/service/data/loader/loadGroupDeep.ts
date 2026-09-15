import type { DataGroup } from '@model/DataGroup';

import type { DataService } from '../data-service';

/**
 * Load the given group key from json and all subgroups recursively
 * */
export function loadGroupDeep(service: DataService) {
    return (
        parent: DataGroup,
        groupKey: string,
    ): DataGroup | null => {
        const group = service.loadGroupShallow(parent, groupKey);

        group?.order?.forEach((subGroupKey) => {
            const subGroup = service.loadGroupDeep(group, `${groupKey}.${subGroupKey}`);

            if(!subGroup) {
                console.error('Error: could not generate subGroup', subGroupKey, group);
                return;
            }

            if(!group.subGroups) group.subGroups = new Map();

            group.subGroups.set(subGroup._key, subGroup);
        });

        return group;
    };
}
