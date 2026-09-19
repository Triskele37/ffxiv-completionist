import { dialog } from 'electron';
import fs from 'fs';

import { CustomMeta } from '../../../common/CustomContent';

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
