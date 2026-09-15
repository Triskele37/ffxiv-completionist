import { DataGroup } from '@model/DataGroup';
import { ViewToken } from '@view/view-token';

import type { MainMenuService } from '../main-menu.service';

export function getPatchNotes(service: MainMenuService) {
    return (): DataGroup => {
        return service.svcData.createDataGroup({
            key: 'patch-notes',
            groupName: service.translate.instant('APP.UPDATES.TITLE'),
            component: ViewToken.PatchNotes
        }, service.group);
    };
}
