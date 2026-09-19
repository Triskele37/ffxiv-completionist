import type { DataGroup } from '@model/DataGroup';

import type { TableService } from '../table.service';

export function setHasNumericColumns(service: TableService) {
    return (): void => {
        service.hasNumericColumns = getHasNumericColumns(service.group());
    };
}

function getHasNumericColumns(group: DataGroup | null) {
    if(!group) return false;
    if(group.type === 'Bookmark') return true;
    if(group.type === 'Note') return true;
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
