import type { DataGroup } from '@model/DataGroup';

import type { CustomContentService } from '../custom-content.service';

export function editGroupMeta(service: CustomContentService) {
    return (
        group: DataGroup,
        key: 'name',
        value: string,
    ): void => {
        const metaStorageKey = service.getMetaStorageKey(group);
        const groupMeta = service.svcSaveStore.get(metaStorageKey) || {};
        groupMeta[key] = value;
        group[key] = value;

        service.svcSaveStore.set(metaStorageKey, groupMeta);
        service.onGroupUpdated$.next();
    };
}
