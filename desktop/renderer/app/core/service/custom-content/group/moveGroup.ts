import type { DataGroup } from '@model/DataGroup';

import type { CustomContentService } from '../custom-content.service';

export function moveGroup(service: CustomContentService) {
    return (
        targetGroup: DataGroup,
        group: DataGroup,
    ): void => {
        if(!group._parent) {
            console.error(`Failed to remove group ${group._key}: no parent`);
            return;
        }

        // Keep reference to old properties
        const oldMetaStorageKey = service.getMetaStorageKey(group);
        const oldMeta = service.svcSaveStore.get(oldMetaStorageKey) || {};
        const { fullStorageKey: oldStorageKey } = group;
        const oldSave = service.svcSaveStore.get(oldStorageKey);

        // Get next safe ID based on new parent
        const parentMetaStorageKey = service.getMetaStorageKey(targetGroup);
        const parentMeta = service.svcSaveStore.get(parentMetaStorageKey) || {};
        const [, newKey] = service.getNextKeyForMeta(parentMeta, true);

        // Change position in app tree
        group._parent.subGroups?.delete(group._key);
        service.changeGroupParent(group, targetGroup, newKey);

        // Change position in completion & meta
        service.svcSaveStore.delete(oldMetaStorageKey);
        service.svcSaveStore.set(service.getMetaStorageKey(group), oldMeta);
        service.svcSaveStore.delete(oldStorageKey);
        service.svcSaveStore.set(group.fullStorageKey, oldSave);

        // Fire updates
        service.onGroupUpdated$.next();
    };
}
