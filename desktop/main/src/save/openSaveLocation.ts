import { shell } from 'electron';

import { GlobalStore } from '../globalStore';

export function openSaveLocation(): void {
    if(GlobalStore.config) {
        shell.openPath(GlobalStore.config['store-loc']);
    }
}
