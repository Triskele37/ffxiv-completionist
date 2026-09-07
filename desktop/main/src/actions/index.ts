import { ipcMain, IpcMainEvent } from 'electron';

import { MainSyncApi, MainAsyncApi } from '../../../common/MainApi';

import { GlobalStore } from '../globalStore';
import * as Config from '../config';
import * as Save from '../save';
import { showMainWindow } from '../window';
import { getData } from './getData';
import { importCustom, exportCustom } from './shareCustom';
import { preloadJson } from './preloadJson';

export function initActions() {
	for(const [ipcEvent, handler] of Object.entries(mainApi)) {
		ipcMain.on(ipcEvent, (event: IpcMainEvent, ...args: any[]) => {
            if(GlobalStore.LOG_IPC_CHAIN) console.log('on', ipcEvent, ...args);
			event.returnValue = (handler as Function).apply(null, args) ?? null;
		});
	}

	for(const [ipcEvent, handler] of Object.entries(mainAsyncApi)) {
		ipcMain.handle(ipcEvent, (...args: any[]) => {
            if(GlobalStore.LOG_IPC_CHAIN) console.log('on', ipcEvent, ...args);
            (handler as Function).apply(null, args);
        });
	}
}

const mainApi: Partial<MainSyncApi> = {
	onAppReady: showMainWindow,
	getData: getData,

    getConfig: Config.loadConfig,
    setConfig: Config.setConfig,
    newSave: Config.targetNewSave,
    loadSave: Config.targetExistingSave,
    openConfig: Config.openConfigLocation,
    backupConfig: Config.createBackupConfig,
    loadBackupConfig: Config.loadBackupConfig,

    getSave: Save.getSave,
    setSave: Save.setSave,
    openSave: Save.openSaveLocation,
    backupSave: Save.createBackupSave,
    loadBackupSave: Save.loadBackupSave,

    importCustom: importCustom,
    exportCustom: exportCustom,
};

const mainAsyncApi: Partial<MainAsyncApi> = {
	onAppRefresh: async () => {
        // allows refreshes to receive updates /resources
        await preloadJson();
    }
};
