import { DataGroup } from '@domain/DataGroup';

export const Duty_Guildhests = function(parent: DataGroup, path: string) {
    const group = DataGroup.fromJSON(parent, `${path}/index`);
    group.subGroups = new Map();

    const addGuildhestClone = (name: string) => {
        const clone = DataGroup.fromJSON(group, `${path}/guildhests`).forceName(name);
        group.subGroups.set(clone._key, clone);

        for(let i = 1; i < clone.tasks.length; i++) {
            const linkPath = clone.tasks[i].unlock.split('.');
            const id = linkPath.pop();
            clone.tasks[i].unlock = `${linkPath.join('.')}.${clone._key}.${id}`;
        }
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
