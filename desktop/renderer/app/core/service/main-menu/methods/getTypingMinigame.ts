import { DataGroup } from '@model/DataGroup';
import { ViewToken } from '@view/view-token';

import type { MainMenuService } from '../main-menu.service';

export function getTypingMinigame(service: MainMenuService) {
    return (): DataGroup => {
        return service.svcData.createDataGroup({
            key: 'keybound-completionist',
            groupName: service.translate.instant('APP.TYPING_MINIGAME.TITLE'),
            component: ViewToken.TypingMinigame
        }, service.group);
    };
}
