import { DataGroup } from '@domain/DataGroup';
import { TranslateService } from '@ngx-translate/core';

export const Duty_Guildhests = (translate: TranslateService) => (parent: DataGroup, path: string) => {
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
