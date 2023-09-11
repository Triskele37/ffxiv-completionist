import { ConfigStoreService } from '@service/store/config-store.service';

import { DataGroup } from '../';
import { isComplete, isEmpty } from '../completion/metrics';

export function isHiddenGroup(
    group: DataGroup,
    svcConfig: ConfigStoreService
): boolean {
    if(group.isUiGroup) return false;

    const showCompletedGroups = svcConfig.get('show-completed-groups');
    if(isComplete(group) && !showCompletedGroups) return true;

    const showEmptyGroups = svcConfig.get('show-empty-groups');
    if(!isComplete(group) && isEmpty(group) && !showEmptyGroups) return true;

    return false;
}
