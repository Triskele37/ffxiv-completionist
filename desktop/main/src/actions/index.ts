import { ipcMain, IpcMainEvent, IpcMainInvokeEvent } from 'electron';

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
            if(!validateSender(event.senderFrame)) return;
            if(GlobalStore.LOG_IPC_CHAIN) console.log('on', ipcEvent);
			event.returnValue = (handler as Function).apply(null, args) ?? null;
		});
	}

	for(const [ipcEvent, handler] of Object.entries(mainAsyncApi)) {
		ipcMain.handle(ipcEvent, (event: IpcMainInvokeEvent, ...args: any[]) => {
            if(!validateSender(event.senderFrame)) return;
            if(GlobalStore.LOG_IPC_CHAIN) console.log('handle', ipcEvent);
            return (handler as Function).apply(null, args);
        });
	}
}

// SEC: ensure the app itself sent the ipc request
function validateSender(frame: any): boolean {
    return frame.url === GlobalStore.senderUrl;
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
