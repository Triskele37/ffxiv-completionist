import type { DataGroup } from '@model/DataGroup';

import type { DataService } from '../data-service';

export function diveForLoad(service: DataService) {
    return (
        group: DataGroup,
        storeGroup: any
    ): void => {
        group.subGroups?.forEach((subGroup) => {
            if(!subGroup) return;

            if(storeGroup[subGroup.storageKey]) {
                service.diveForLoad(subGroup, storeGroup[subGroup.storageKey]);
            }
        });

        group.tasks?.forEach((task) => {
            if(storeGroup[task.storageKey]) {
                service.svcMark.setCompletion(task, storeGroup[task.storageKey]);
            }
        });
    };
}
