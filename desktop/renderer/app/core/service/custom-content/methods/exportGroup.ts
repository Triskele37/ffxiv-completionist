import type { DataGroup } from '@model/DataGroup';

import type { CustomContentService } from '../custom-content.service';

export function exportGroup(service: CustomContentService) {
    return (
        group: DataGroup,
    ): void => {
        const metaStorageKey = service.getMetaStorageKey(group);
        const groupMeta = service.svcSaveStore.get(metaStorageKey) || {};

        service.svcElectron.exportCustom(groupMeta);
    };
}
