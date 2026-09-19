import type { DataGroup } from '@model/DataGroup';
import type { JsonTasks } from '@model/JSONResource';

import type { CustomContentService } from '../custom-content.service';

export function initCustomGroup(service: CustomContentService) {
    return (
        group: DataGroup,
    ): void => {
        // Make sure 'meta' does not reference the actual store
        const meta: JsonTasks = {};
        const storageKey = service.getMetaStorageKey(group);
        const currentMeta = service.svcSaveStore.get(storageKey) || {};

        for(const key in currentMeta) {
            if(key.startsWith('g')) {
                const subGroup = service.createDataGroupObj(
                    parseInt(key.substring(1), 10),
                    currentMeta[key].name,
                    group
                );

                if(!group.subGroups) group.subGroups = new Map();
                group.subGroups.set(key, subGroup);

                service.initCustomGroup(subGroup);
            }
            else if(key.startsWith('x')) {
                meta[key] = {
                    id: parseInt(key.substring(1), 10),
                    ...currentMeta[key]
                };
            }
        }

        service.svcData.initTasks(group, meta);
    };
}
