import { DataGroup } from '@model/DataGroup';
import { fromJson, fromMappedJson } from '@model/DataGroup/createDataGroup/fromJson';
import { TranslateService } from '@ngx-translate/core';

export const Duty_Guildhests = (translate: TranslateService) => (parent: DataGroup, path: string) => {
    const group = fromJson(parent, `${path}`);
    group.subGroups = new Map();

    const addGuildhestClone = (key: string, name: string) => {
        const clone = fromMappedJson(group, `${path}/guildhests`, (json) => {
            json.groupName = name;
            json.key = key;
            return json;
        });

        group.subGroups.set(clone._key, clone);

        for(let i = 1; i < clone.tasks.length; i++) {
            const linkPath = clone.tasks[i].unlock.split('.');
            const id = linkPath.pop();
            clone.tasks[i].unlock = `${linkPath.join('.')}.${clone._key}.${id}`;
        }
    };

    addGuildhestClone('arcanist', translate.instant('DATA.CLASS_JOB.ACN'));
    addGuildhestClone('archer', translate.instant('DATA.CLASS_JOB.ARC'));
    addGuildhestClone('astrologian', translate.instant('DATA.CLASS_JOB.AST'));
    addGuildhestClone('conjurer', translate.instant('DATA.CLASS_JOB.CNJ'));
    addGuildhestClone('dark-knight', translate.instant('DATA.CLASS_JOB.DRK'));
    addGuildhestClone('gladiator', translate.instant('DATA.CLASS_JOB.GLA'));
    addGuildhestClone('lancer', translate.instant('DATA.CLASS_JOB.LNC'));
    addGuildhestClone('machinist', translate.instant('DATA.CLASS_JOB.MCH'));
    addGuildhestClone('marauder', translate.instant('DATA.CLASS_JOB.MRD'));
    addGuildhestClone('pugilist', translate.instant('DATA.CLASS_JOB.PGL'));
    addGuildhestClone('red-mage', translate.instant('DATA.CLASS_JOB.RDM'));
    addGuildhestClone('rogue', translate.instant('DATA.CLASS_JOB.ROG'));
    addGuildhestClone('samurai', translate.instant('DATA.CLASS_JOB.SAM'));
    addGuildhestClone('thaumaturge', translate.instant('DATA.CLASS_JOB.THM'));

    return group;
};

// allow one json for guildhests instead of 1 per class
function forceName(group: DataGroup, name) {
    group.name = name;
    group._key = name.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^a-z0-9-]/g, '');

    return group;
}
