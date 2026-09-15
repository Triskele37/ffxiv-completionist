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

        add(service.getPatchNotes());
        add(service.getPatchView());
        add(service.getRandom());
        add(service.getTypingMinigame());
        add(service.getChainAnalysis());
        add(service.getSettings());
        add(service.getSearch());

        return group;
    };
}
