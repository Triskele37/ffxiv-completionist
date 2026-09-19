import type { DataGroup } from '@model/DataGroup';

import type { NavigationService } from '../navigation.service';

export function getGroupFromBreadcrumbs(service: NavigationService) {
    return (
        breadcrumbs: string[],
    ): DataGroup | null => {
        if(!breadcrumbs) return null;

        if(breadcrumbs.length === 1) {
            if(breadcrumbs[0] === service.svcMainMenu.group._key) return service.svcMainMenu.group;
            else return service.svcData.data;
        }

        const superGroup = { subGroups: new Map() } as DataGroup;
        superGroup.subGroups!.set(service.svcMainMenu.group._key, service.svcMainMenu.group);
        superGroup.subGroups!.set(service.svcData.data._key, service.svcData.data);

        const group = breadcrumbs.reduce(
            (acc, crumb) => acc.subGroups?.get(crumb) || acc,
            superGroup
        );

        if(group.dataType === 'Group') return group;
        else return service.svcMainMenu.group;
    };
}
