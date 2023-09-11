import { DataGroup } from '@model/DataGroup';
import { fromJson } from '@model/DataGroup/createDataGroup/fromJson';
import { TranslateService } from '@ngx-translate/core';

export const Duty_Guildhests = (translate: TranslateService) => (parent: DataGroup, path: string) => {
    const group = fromJson(parent, `${path}`);
    group.subGroups = new Map();

    const addGuildhestClone = (name: string) => {
        const clone = forceName(fromJson(group, `${path}/guildhests`), name);
        group.subGroups.set(clone._key, clone);

        for(let i = 1; i < clone.tasks.length; i++) {
            const linkPath = clone.tasks[i].unlock.split('.');
            const id = linkPath.pop();
            clone.tasks[i].unlock = `${linkPath.join('.')}.${clone._key}.${id}`;
        }
    };

    addGuildhestClone(translate.instant('DATA.CLASS_JOB.ACN'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.ARC'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.AST'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.CNJ'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.DRK'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.GLA'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.LNC'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.MCH'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.MRD'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.PGL'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.RDM'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.ROG'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.SAM'));
    addGuildhestClone(translate.instant('DATA.CLASS_JOB.THM'));

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
