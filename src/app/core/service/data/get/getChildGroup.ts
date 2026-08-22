import { DataGroup } from '@model/DataGroup';

import { DataServiceContext } from '../types';

/**
 * Overload for `getChild` to type assert `DataGroup`
 * */
export function getChildGroup(
    this: DataServiceContext,
    sourceGroup: DataGroup | null,
    path: string,
): DataGroup | null {
    const group = this.get.getChild(sourceGroup, path);

    if(!group) {
        this.get.logGetMiss('group', path, sourceGroup?.fullStorageKey);
        return null;
    }
    else if(group.dataType !== 'Group') {
        this.get.logGetMismatch('Group', 'Task', path, sourceGroup?.fullStorageKey);
        return null;
    }

    return group;
}
