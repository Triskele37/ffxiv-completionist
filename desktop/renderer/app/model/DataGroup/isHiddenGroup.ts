import type { ConfigStoreService } from '@service/store/config-store.service';

import type { DataGroup } from './index';
import { isComplete, isEmpty } from './metrics';

export function isHiddenGroup(
    group: DataGroup,
    svcConfig: ConfigStoreService
): boolean {
    const { isBookmarkGroup, isCustomGroup, isUiGroup } = group;
    if(isBookmarkGroup || isCustomGroup || isUiGroup) return false;
    if(group.fullStorageKey.startsWith('overall.reference')) return false;

    const showCompletedGroups = svcConfig.get('show-completed-groups');
    if(isComplete(group) && !showCompletedGroups) return true;

    const showEmptyGroups = svcConfig.get('show-empty-groups');
    if(!isComplete(group) && isEmpty(group) && !showEmptyGroups) return true;

    return false;
}
