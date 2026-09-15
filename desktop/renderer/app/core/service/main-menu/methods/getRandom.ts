import { DataGroup } from '@model/DataGroup';
import { ViewToken } from '@view/view-token';

import type { MainMenuService } from '../main-menu.service';

export function getRandom(service: MainMenuService) {
    return (): DataGroup => {
        return service.svcData.createDataGroup({
            key: 'random',
            groupName: service.translate.instant('APP.RANDOM_VIEW.TITLE'),
            component: ViewToken.Random
        }, service.group);
    };
}
