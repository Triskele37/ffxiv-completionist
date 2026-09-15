import type { DataGroup } from '@model/DataGroup';

import type { CustomContentService } from '../custom-content.service';

export function removeGroup(service: CustomContentService) {
    return (
        group: DataGroup,
    ): void => {
        if(!group._parent) {
            console.error(`Failed to remove group ${group._key}: no parent`);
            return;
        }

        // Remove from app tree, saved data, and custom meta
        group._parent.subGroups?.delete(group._key);
        service.svcSaveStore.delete(group.fullStorageKey);
        service.svcSaveStore.delete(service.getMetaStorageKey(group));

        service.onGroupUpdated$.next();
    };
}
