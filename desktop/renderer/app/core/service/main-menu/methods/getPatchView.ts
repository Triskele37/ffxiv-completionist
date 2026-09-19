import { DataGroup } from '@model/DataGroup';
import { ViewToken } from '@view/view-token';

import type { MainMenuService } from '../main-menu.service';

export function getPatchView(service: MainMenuService) {
    return (
        parent: DataGroup,
    ): DataGroup => {
        return service.svcData.createDataGroup({
            key: 'patch-view',
            groupName: service.translate.instant('APP.PATCH_VIEW.TITLE'),
            component: ViewToken.PatchView
        }, parent);
    };
}
