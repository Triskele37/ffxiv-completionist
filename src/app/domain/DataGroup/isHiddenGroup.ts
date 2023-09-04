import { ConfigStoreService } from '@service/store/config-store.service';

import { DataGroup } from '../DataGroup';

export function isHiddenGroup(
    group: DataGroup,
    svcConfig: ConfigStoreService
): boolean {
    if(group.isUiGroup) return false;

    const showCompletedGroups = svcConfig.get('show-completed-groups');
    if(group.isComplete && !showCompletedGroups) return true;

    const showEmptyGroups = svcConfig.get('show-empty-groups');
    if(!group.isComplete && group.isEmpty && !showEmptyGroups) return true;

    return false;
}
