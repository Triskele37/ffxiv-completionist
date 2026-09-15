import type { DataGroup } from '@model/DataGroup';

import type { CustomContentService } from '../custom-content.service';

export function duplicateGroup(service: CustomContentService) {
    return (
        targetGroup: DataGroup,
        group: DataGroup,
    ): DataGroup => {
        const metaStorageKey = service.getMetaStorageKey(group);
        const meta = service.svcSaveStore.get(metaStorageKey) || {};

        // Get next safe ID based on target group
        const parentMetaStorageKey = service.getMetaStorageKey(targetGroup);
        const parentMeta = service.svcSaveStore.get(parentMetaStorageKey) || {};
        const [, newKey] = service.getNextKeyForMeta(parentMeta, true);

        // Clone the group
        const duplicateMeta = structuredClone(meta);

        // Update app tree
        const clonedGroup = service.cloneGroupObj(group, targetGroup, newKey);

        // Add duplicated meta
        service.svcSaveStore.set(`${parentMetaStorageKey}.${newKey}`, duplicateMeta);

        // Fire updates
        service.onGroupUpdated$.next();
        return clonedGroup;
    };
}
