import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values
// other than as TypeScript types, the resulting javascript file
// will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';

@Injectable({
    providedIn: 'root'
})
export class ElectronService {
    ipcRenderer: typeof ipcRenderer;

    constructor() {
        // Conditional imports
        if(this.isElectron) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
        }
    }

    get isElectron(): boolean {
        return !!window?.process?.type; // === 'renderer';
    }
}
