import { DataGroup } from '@domain/DataGroup';

export const Duty_Guildhests = function(parent: DataGroup, path: string) {
    const group = DataGroup.fromJSON(parent, `${path}/index`);
    group.subGroups = new Map();

    const addGuildhestClone = (name: string) => {
        const clone = DataGroup.fromJSON(group, `${path}/guildhests`).forceName(name);
        group.subGroups.set(clone._key, clone);
    };

    addGuildhestClone('Arcanist');
    addGuildhestClone('Archer');
    addGuildhestClone('Astrologian');
    addGuildhestClone('Conjurer');
    addGuildhestClone('Dark Knight');
    addGuildhestClone('Gladiator');
    addGuildhestClone('Lancer');
    addGuildhestClone('Machinist');
    addGuildhestClone('Marauder');
    addGuildhestClone('Pugilist');
    addGuildhestClone('Red Mage');
    addGuildhestClone('Rogue');
    addGuildhestClone('Samurai');
    addGuildhestClone('Thaumaturge');

    return group;
};
