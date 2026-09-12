import { dialog } from 'electron';
import * as fs from 'fs';

import { CustomMeta } from '../../../common/CustomContent';
import { isValidCustomMeta } from './isValidCustomMeta';

export function importCustom(): CustomMeta | false | null {
    const results = dialog.showOpenDialogSync({
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    if(results?.[0]) {
        try {
            const json = JSON.parse(fs.readFileSync(results[0], 'utf8'));
            return isValidCustomMeta(json) ? json : false;
        }
        catch(e) {
            console.error('Unable to parse imported custom group', e);
        }
    }

    return null;
}
