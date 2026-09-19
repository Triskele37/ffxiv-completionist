import type { DataGroup } from '@model/DataGroup';
import type { JSONResource } from '@model/JSONResource';

import type { DataService } from '../data-service';

export function diveForSave(service: DataService) {
    return (
        group: DataGroup,
    ): any => {
        const subGroupOrTasks: JSONResource = {};

        group.subGroups?.forEach((subGroup) => {
            if(!subGroup) return;

            // Don't save anything from bookmarks
            if(subGroup.type !== 'Data' && subGroup.type !== 'Custom') return;

            subGroupOrTasks[subGroup.storageKey] = service.diveForSave(subGroup);
        });

        group.tasks?.forEach((task) => {
            // Task doesn't need to be written if it is its default
            if(task.defaultCompletion !== task.completionFlag$()) {
                subGroupOrTasks[task.storageKey] = task.completionFlag$();
            }
        });

        return subGroupOrTasks;
    };
}
