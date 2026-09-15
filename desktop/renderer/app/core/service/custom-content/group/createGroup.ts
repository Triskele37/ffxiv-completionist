import type { DataGroup } from '@model/DataGroup';

import type { CustomContentService } from '../custom-content.service';

export function createGroup(service: CustomContentService) {
    return (
        parentGroup: DataGroup,
        name: string,
    ): void => {
        const metaStorageKey = service.getMetaStorageKey(parentGroup);
        const customMeta = service.svcSaveStore.get(metaStorageKey) || {};

        // Get next safe ID
        const [nextId, nextKey] = service.getNextKeyForMeta(customMeta, true);

        // Update saved meta
        service.svcSaveStore.set(`${metaStorageKey}.${nextKey}`, { name });

        // Update app tree
        const newGroup = service.createDataGroupObj(nextId, name, parentGroup);
        if(!parentGroup.subGroups) parentGroup.subGroups = new Map();
        parentGroup.subGroups.set(newGroup._key, newGroup);
        service.onGroupUpdated$.next();
    };
}
