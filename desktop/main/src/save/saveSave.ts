import fs from 'fs';

import { GlobalStore } from '../globalStore';

export function saveSave(): void {
    if(!GlobalStore.savePath) {
        console.error('Attempted to save without initialized path');
        return;
    }

    // In the event a queuedSave exists and another save was called
    // trash the queuedSave so it doesn't overwrite the new store
    if(GlobalStore.queuedSave) clearTimeout(GlobalStore.queuedSave);

    try {
        fs.writeFileSync(
            GlobalStore.savePath,
            JSON.stringify(GlobalStore.save, null, 4)
        );
    }
    catch(e: any) {
        // Retry save if the file was locked
        if(e.code === 'EBUSY') {
            GlobalStore.queuedSave = setTimeout(() => saveSave(), 1000);
        }
    }
}
