import { DataGroup } from '@model/DataGroup';
import { JSONResource } from '@model/JSONResource';

import { DataServiceContext } from '../types';

export function diveForSave(
    this: DataServiceContext,
    group: DataGroup,
): any {
    const subGroupOrTasks: JSONResource = {};

    group.subGroups?.forEach((subGroup) => {
        if(!subGroup) return;

        // Don't save anything from bookmarks
        if(subGroup.isBookmarkGroup) return;

        subGroupOrTasks[subGroup.storageKey] = this.apply.diveForSave(subGroup);
    });

    group.tasks?.forEach((task) => {
        // Task doesn't need to be written if it is its default
        if(task.defaultCompletion !== task.completionFlag$()) {
            subGroupOrTasks[task.storageKey] = task.completionFlag$();
        }
    });

    return subGroupOrTasks;
}
