import type { DataGroup } from '@model/DataGroup';

import type { TableServiceContext } from '../types';

export function setHasNumericColumns(
    this: TableServiceContext,
) {
    this.hasNumericColumns = getHasNumericColumns(this.group());
}

function getHasNumericColumns(group: DataGroup | null) {
    if(!group) return false;
    if(group.isBookmarkGroup) return true;
    if(group.isNumericCompletion) return true;

    if(group.tasks?.length) {
        return group.tasks.some((task) => task.isNumericCompletion);
    }
    else { // should be in show all mode
        let anySubGroupIsNumericCompletion = false;

        group.subGroups?.forEach((subGroup) => {
            anySubGroupIsNumericCompletion ||= getHasNumericColumns(subGroup);
        });

        return anySubGroupIsNumericCompletion;
    }
}
