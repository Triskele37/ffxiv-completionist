import { DataGroup } from '@model/DataGroup';

import { DataServiceContext } from '../types';

export function diveForLoad(
    this: DataServiceContext,
    group: DataGroup,
    storeGroup: any
): void {
    group.subGroups?.forEach((subGroup) => {
        if(!subGroup) return;

        if(storeGroup[subGroup.storageKey]) {
            this.apply.diveForLoad(subGroup, storeGroup[subGroup.storageKey]);
        }
    });

    group.tasks?.forEach((task) => {
        if(storeGroup[task.storageKey]) {
            this.svcMark.setCompletion(task, storeGroup[task.storageKey]);
        }
    });
}
