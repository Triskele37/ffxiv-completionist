import { ReturnsOfType, ReturnsNotOfType } from './typeUtils';

import { ConfigLoad, ConfigObj } from './Config';
import { CustomMeta } from './CustomContent';
import { Features } from './Features';
import { JsonCache } from './JsonCache';
import { PlayerSave, SaveLoad } from './PlayerSave';
import { Migration } from './Migration';

export interface MainApi {
    // Sync
	onAppReady: () => void;
    getVersion: () => string;
    getFeature: <K extends keyof Features>(featureKey: K) => Features[K] | undefined;
    getData: () => JsonCache;
    getMigration: (version: string) => Migration | undefined;

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

    openExternalSingle: (value: string, key: string) => boolean;
    openExternalMulti: (values: string[], key: string) => boolean;

    // Async
    onAppRefresh: () => Promise<void>;
}

export type MainSyncApi = ReturnsNotOfType<MainApi, Promise<any>>;
export type MainAsyncApi = ReturnsOfType<MainApi, Promise<any>>;
