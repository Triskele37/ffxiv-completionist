import { DataGroup } from '@domain/DataGroup';

export const Duty_Guildhests = function(parent: DataGroup, path: string) {
    const group = DataGroup.fromJSON(parent, `${path}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Arcanist'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Archer'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Astrologian'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Conjurer'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Dark Knight'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Gladiator'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Lancer'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Machinist'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Marauder'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Pugilist'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Red Mage'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Rogue'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Samurai'),
        DataGroup.fromJSON(group, `${path}/guildhests`).forceName('Thaumaturge'),
    ];

    return group;
};
