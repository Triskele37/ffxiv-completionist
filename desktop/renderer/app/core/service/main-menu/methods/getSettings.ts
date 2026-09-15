import { DataGroup } from '@model/DataGroup';
import { ViewToken } from '@view/view-token';

import type { MainMenuService } from '../main-menu.service';

export function getSettings(service: MainMenuService) {
    return (): DataGroup => {
        return service.svcData.createDataGroup({
            key: 'settings',
            groupName: service.translate.instant('APP.SETTING.TITLE'),
            component: ViewToken.Settings
        }, service.group);
    };
}
