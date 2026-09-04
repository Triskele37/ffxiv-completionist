import type { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

import type { DataServiceContext } from '../types';

/**
 * Initialize the data structure
 * */
export function initializeData(
    this: DataServiceContext,
): DataGroup {
    // Inject the full data cache into the renderer
    this.loader.dataCache = this.svcElectron?.sendSync(IPC_EVENT.GET_DATA);

    // Load the root DataGroup
    const data = this.loader.loadGroupShallow(null, '');
    if(!data) {
        console.error('Failed to load data');
        return createDummyGroup();
    }

    // Add dynamic groups
    data.subGroups = new Map();
    data.subGroups.set('bookmarks', null);
    data.subGroups.set('custom', null);

    // Add child data groups
    data.order?.forEach((subGroupKey) => {
        if(!data.subGroups) return;

        const subGroup = this.loader.loadGroupDeep(data, subGroupKey);
        if(!subGroup) return;

        data.subGroups.set(subGroup._key, subGroup);
    });

    // Log unloaded groups
    const unloaded = Object.keys(this.loader.dataCache)
        .filter((k) => k !== 'bookmarks' && k !== 'custom');

    if(unloaded.length) {
        console.warn('Unloaded groups!', unloaded);
    }

    return data;
}
