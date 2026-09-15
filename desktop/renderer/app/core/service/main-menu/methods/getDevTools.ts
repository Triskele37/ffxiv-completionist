import { DataGroup } from '@model/DataGroup';
import { ViewToken } from '@view/view-token';

import type { MainMenuService } from '../main-menu.service';

export function syncDevTools(service: MainMenuService) {
    return (): void => {
        service.svcConfigStore.updated$.subscribe((data) => {
            const group = service.getDevTools();

            if(data.isAdmin) {
                if(!service.group.subGroups!.get(group._key)) {
                    service.group.subGroups!.set(group._key, group)
                }
            }
            else {
                service.group.subGroups!.delete(group._key);
            }
        });
    };
}

export function getDevTools(service: MainMenuService) {
    return (): DataGroup => {
        return service.svcData.createDataGroup({
            key: 'dev-tools',
            groupName: 'Dev Tools',
            component: ViewToken.DevTools
        }, service.group);
    };
}
