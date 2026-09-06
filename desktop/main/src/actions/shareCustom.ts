import { dialog } from 'electron';
import * as fs from 'fs';

import { CustomMeta } from '../../../common/CustomContent';

export function importCustom(): CustomMeta | false | null {
    const results = dialog.showOpenDialogSync({
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    if(results?.[0]) {
        try {
            const json = JSON.parse(fs.readFileSync(results[0], 'utf8'));
            return isValidMeta(json) ? json : false;
        }
        catch(e) {
            console.error('Unable to parse imported custom group', e);
        }
    }

    return null;
}

function isValidMeta(importedMeta: CustomMeta): boolean {
    if(!importedMeta) return false;
    if(typeof importedMeta !== 'object') return false;
    if(!importedMeta.name) return false;
    if(typeof importedMeta.name !== 'string') return false;

    for(let k in importedMeta) {
        if(k === 'name') continue;

        if(/^g[0-9]+$/.test(k)) {
            if(!isValidMeta(importedMeta[k])) return false;
            continue;
        }

        if(/^x[0-9]+$/.test(k)) {
            const { name, notes, ...rest } = importedMeta[k];
            if(typeof name !== 'string' || !name) return false;
            if(typeof notes !== 'string') return false;
            if(Object.keys(rest).length) return false;

            continue;
        }

        return false;
    }

    return true;
}

export function exportCustom(customGroupMeta: CustomMeta): void {
    const fileName = `${customGroupMeta.name}.json`;

    const result = dialog.showSaveDialogSync({
        defaultPath: fileName,
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    if(result) {
        fs.writeFileSync(result, JSON.stringify(customGroupMeta, null, 4));
    }
}
