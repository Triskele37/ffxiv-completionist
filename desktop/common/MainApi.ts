import { ReturnsOfType, ReturnsNotOfType } from './typeUtils';
import { ConfigLoad, ConfigObj } from './Config';
import { CustomMeta } from './CustomContent';
import { JsonCache } from './JsonCache';
import { PlayerSave, SaveLoad } from './PlayerSave';
import { Migration } from './Migration';

export interface MainApi {
	onAppReady: () => void;
    getVersion: () => string;
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

    searchConsoleGames: (searchTerm: string) => void;
    searchGamerEscape: (searchTerm: string) => void;
    searchGarlandTools: (searchTerm: string) => void;
    openInGarlandTools: (ids: number[], groupName: string) => void;
    openInTeamcraft: (ids: number[]) => void;

    onAppRefresh: () => Promise<void>;
}

export type MainSyncApi = ReturnsNotOfType<MainApi, Promise<any>>;
export type MainAsyncApi = ReturnsOfType<MainApi, Promise<any>>;
