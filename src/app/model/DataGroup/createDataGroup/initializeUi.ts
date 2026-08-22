import { JSONResource } from '@model/JSONResource';
import { DataGroup } from '../';

export function initializeUi(group: DataGroup, json: JSONResource) {
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
