import { app } from 'electron';

import { MainAsyncApi, MainSyncApi } from '../../../common/MainApi';

import * as Config from '../config';
import { importCustom } from '../custom/importCustom';
import { exportCustom } from '../custom/exportCustom';
import { getCache } from '../data/cache';
import { getMigration } from '../data/getMigration';
import { preloadData } from '../data/preloadData';
import * as Save from '../save';
import { showMainWindow } from '../window';

export const mainApi: Partial<MainSyncApi> = {
    onAppReady: showMainWindow,
    getVersion: () => app.getVersion(),
    getData: getCache,
    getMigration: getMigration,

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

export const mainAsyncApi: Partial<MainAsyncApi> = {
    onAppRefresh: async () => {
        // allows refreshes to receive updates /resources
        await preloadData();
    }
};
