import { DataGroup } from '@model/DataGroup';

import { MainMenuService } from '../main-menu.service';

export function initGroup(service: MainMenuService) {
    return (): DataGroup => {
        const group = service.svcData.createDataGroup({
            key: 'main-menu',
            groupName: service.translate.instant('APP.NAME'),
            type: 'UI',
            noContent: true,
            addSpacerBelow: true,
        }, null);

        group.subGroups = new Map();

        const add = (g: DataGroup) => group.subGroups!.set(g._key, g);

        add(service.getPatchNotes(group));
        add(service.getPatchView(group));
        add(service.getRandom(group));
        add(service.getTypingMinigame(group));
        add(service.getChainAnalysis(group));
        add(service.getSettings(group));
        add(service.getSearch(group));

        return group;
    };
}
