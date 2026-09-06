import { ipcMain, IpcMainEvent } from 'electron';

import { IPC_EVENT } from '../../../common/IPC_EVENT';
import { MainSyncApi, MainAsyncApi } from '../../../common/MainApi';
import { ConfigStore } from '../store/ConfigStore';
import { PlayerStore } from '../store/PlayerStore';
import { WindowStore } from '../store/WindowStore';

import { getData } from './getData';
import { importCustom, exportCustom } from './shareCustom';
import { preloadJson } from './preloadJson';

export function initActions() {
	for(const [ipcEvent, handler] of Object.entries(mainApi)) {
		ipcMain.on(ipcEvent, (event: IpcMainEvent, ...args: any[]) => {
			event.returnValue = (handler as Function).apply(null, args) ?? null;
		});
	}
	
	for(const [ipcEvent, handler] of Object.entries(mainAsyncApi)) {
		ipcMain.handle(ipcEvent, handler);
	}
}

const mainApi: Partial<MainSyncApi> = {
	onAppReady: WindowStore.showMainWindow,
	getData: getData,

    getConfig: ConfigStore.get,
    setConfig: ConfigStore.set,
    newSave: ConfigStore.newSave,
    loadSave: ConfigStore.loadSave,
    openConfig: ConfigStore.open,
    backupConfig: ConfigStore.backup,
    loadBackupConfig: ConfigStore.loadBackup,

    getSave: PlayerStore.get,
    setSave: PlayerStore.set,
    openSave: PlayerStore.open,
    backupSave: PlayerStore.backup,
    loadBackupSave: PlayerStore.loadBackup,

    importCustom: importCustom,
    exportCustom: exportCustom,
};

const mainAsyncApi: Partial<MainAsyncApi> = {
	onAppRefresh: async () => {
        // allows refreshes to receive updates /resources
        await preloadJson();
    }
};
