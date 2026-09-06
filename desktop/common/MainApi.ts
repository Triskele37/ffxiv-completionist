import { IpcMainEvent } from 'electron';

import { ReturnsOfType, ReturnsNotOfType } from './typeUtils';
import { ConfigLoad, ConfigObj } from './Config';
import { CustomMeta } from './CustomContent';
import { JsonCache } from './JsonCache';
import { PlayerSave, SaveLoad } from './PlayerSave';
import { IPC_EVENT } from './IPC_EVENT';

export interface MainApi {
	onAppReady: () => void;
    getData: () => JsonCache;

    getConfig: () => ConfigLoad;
    setConfig: (config: ConfigObj) => void;
    newSave: () => boolean;
    loadSave: () => boolean;
    openConfig: () => void;
    backupConfig: () => void;
    loadBackupConfig: () => boolean;

    getSave: () => SaveLoad;
    setSave: (newSave: PlayerSave) => void;
    openSave: () => void;
    backupSave: () => void;
    loadBackupSave: () => boolean;

    importCustom: () => CustomMeta | false | null;
    exportCustom: (customMeta: CustomMeta) => void;
	
    onAppRefresh: () => Promise<void>;
}

export type MainSyncApi = ReturnsNotOfType<MainApi, Promise<any>>;
export type MainAsyncApi = ReturnsOfType<MainApi, Promise<any>>;
