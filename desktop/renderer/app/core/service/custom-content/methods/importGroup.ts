import type { DataGroup } from '@model/DataGroup';

import type { CustomContentService } from '../custom-content.service';

export function importGroup(service: CustomContentService) {
    return (
        parentGroup: DataGroup,
    ): DataGroup | undefined => {
        const importedMeta = service.svcElectron.importCustom();

        if(importedMeta === false) {
            service.svcMessage.add({
                detail: service.translate.instant('APP.CUSTOM_OVERLAY.INVALID'),
                severity: 'error',
                life: 500000
            });
        }
        else if(importedMeta) {
            // Get next safe ID
            const parentMetaStorageKey = service.getMetaStorageKey(parentGroup);
            const parentMeta = service.svcSaveStore.get(parentMetaStorageKey) || {};
            const [nextId, nextKey] = service.getNextKeyForMeta(parentMeta, true);

            // Update saved meta
            service.svcSaveStore.set(`${parentMetaStorageKey}.${nextKey}`, importedMeta);

            const importedGroup = service.createDataGroupObj(nextId, importedMeta.name, parentGroup);
            service.initCustomGroup(importedGroup);
            service.changeGroupParent(importedGroup, parentGroup, nextKey);
            service.onGroupUpdated$.next();

            return importedGroup;
        }

        return undefined;
    };
}
