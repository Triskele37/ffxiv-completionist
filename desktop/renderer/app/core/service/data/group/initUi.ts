import type { JSONResource } from '@model/JSONResource';
import type { DataGroup } from '@model/DataGroup';

import type { DataService } from '../data-service';

/**
 * Initialize various UI related properties for this group
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function initUi(service: DataService) {
    return (
        group: DataGroup,
        json: JSONResource,
    ): void => {
        group.isCraftingLogGroup = !!(json.isCraftingLogGroup ?? group._parent?.isCraftingLogGroup);

        if(json.component) {
            group.component = json.component;
        }

        if(json.noContent) {
            group.noContent = true;
        }

        group.visible = json.visible !== false;

        group.addSpacerAbove = json.addSpacerAbove;
        group.addSpacerBelow = json.addSpacerBelow;
    };
}
