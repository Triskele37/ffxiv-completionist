import type { DataGroup } from '@model/DataGroup';

import type { DataServiceContext } from '../types';

/**
 * Load the given group key from json and all subgroups recursively
 * */
export function loadGroupDeep(
    this: DataServiceContext,
    parent: DataGroup,
    groupKey: string,
): DataGroup | null {
    const group = this.loader.loadGroupShallow(parent, groupKey);

    group?.order?.forEach((subGroupKey) => {
        const subGroup = this.loader.loadGroupDeep(group, `${groupKey}.${subGroupKey}`);

        if(!subGroup) {
            console.error('Error: could not generate subGroup', subGroupKey, group);
            return;
        }

        if(!group.subGroups) group.subGroups = new Map();

        group.subGroups.set(subGroup._key, subGroup);
    });

    return group;
}
