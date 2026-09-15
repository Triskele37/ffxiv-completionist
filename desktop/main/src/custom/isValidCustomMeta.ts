import { CustomMeta, CustomTask } from '../../../common/CustomContent';

export function isValidCustomMeta(importedMeta: CustomMeta): boolean {
    if(!importedMeta) return false;
    if(typeof importedMeta !== 'object') return false;
    if(!importedMeta.name) return false;
    if(typeof importedMeta.name !== 'string') return false;

    for(let k in importedMeta) {
        if(k === 'name') continue;

        if(/^g[0-9]+$/.test(k)) {
            if(!isValidCustomMeta(importedMeta[k] as CustomMeta)) return false;
            continue;
        }

        if(/^x[0-9]+$/.test(k)) {
            const { name, notes, ...rest } = importedMeta[k] as CustomTask;
            if(typeof name !== 'string' || !name) return false;
            if(typeof notes !== 'string') return false;
            if(Object.keys(rest).length) return false;

            continue;
        }

        return false;
    }

    return true;
}
