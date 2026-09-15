import type { DataGroup } from '@model/DataGroup';

import type { DataService } from '../data-service';

/**
 * Overload for `getChild` to type assert `DataGroup`
 * */
export function getChildGroup(service: DataService) {
    return (
        sourceGroup: DataGroup | null,
        path: string,
    ): DataGroup | null => {
        const group = service.getChild(sourceGroup, path);

        if(!group) {
            service.logGetMiss('group', path, sourceGroup?.fullStorageKey);
            return null;
        }
        else if(group.dataType !== 'Group') {
            service.logGetMismatch('Group', 'Task', path, sourceGroup?.fullStorageKey);
            return null;
        }

        return group;
    };
}
