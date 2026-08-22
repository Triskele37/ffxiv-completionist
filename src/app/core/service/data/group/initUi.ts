import { JSONResource } from '@model/JSONResource';
import { DataGroup } from '@model/DataGroup';

import { DataServiceContext } from '../types';

/**
 * Initialize various UI related properties for this group
 * */
export function initUi(
    this: DataServiceContext,
    group: DataGroup,
    json: JSONResource,
): void {
    group.isCraftingLogGroup = !!(json.isCraftingLogGroup ?? group._parent?.isCraftingLogGroup);

    if(group._parent?.isUiGroup || json.isUiGroup) {
        group.isUiGroup = true;
    }

    if(json.component) {
        group.component = json.component;
    }

    if(json.noContent) {
        group.noContent = true;
    }

    group.visible = json.visible !== false;
}
