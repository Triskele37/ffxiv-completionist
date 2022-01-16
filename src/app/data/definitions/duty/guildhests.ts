import { DataGroup } from '@domain/DataGroup';
import { ElectronService } from '@service/electron/electron.service';

export const Duty_Guildhests = function(svcElectron: ElectronService, parent: DataGroup, path: string) {
    const group = DataGroup.fromJSON(svcElectron, parent, `${path}/index`);

    group.subGroups = [
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Arcanist'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Archer'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Astrologian'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Conjurer'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Dark Knight'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Gladiator'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Lancer'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Machinist'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Marauder'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Pugilist'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Red Mage'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Rogue'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Samurai'),
        DataGroup.fromJSON(svcElectron, group, `${path}/guildhests`).forceName('Thaumaturge'),
    ];

    return group;
};
