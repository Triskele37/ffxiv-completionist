import { DataGroup } from '@model/DataGroup';
import { ViewToken } from '@view/view-token';

import type { MainMenuService } from '../main-menu.service';

export function getSearch(service: MainMenuService) {
    return (): DataGroup => {
        return service.svcData.createDataGroup({
            key: 'search',
            groupName: service.translate.instant('APP.SEARCH.TITLE'),
            component: ViewToken.Search,
            visible: false
        }, service.group);
    };
}
