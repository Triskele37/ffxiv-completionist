import { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';

import { DataServiceContext } from '../types';

/**
 * Initialize the data structure
 * */
export function initializeData(
    this: DataServiceContext,
): DataGroup {
    const data = this.loader.loadGroupShallow(null, '');

    if(!data) {
        console.error('Failed to load data');
        return createDummyGroup();
    }

    data.subGroups = new Map();
    data.subGroups.set('bookmarks', null);
    data.subGroups.set('custom', null);

    data.order?.forEach((subGroupKey) => {
        if(!data.subGroups) return;

        const subGroup = this.loader.loadGroupDeep(data, subGroupKey);
        if(!subGroup) return;

        data.subGroups.set(subGroup._key, subGroup);
    });

    return data;
}
