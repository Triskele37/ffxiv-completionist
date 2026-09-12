import { contextBridge, ipcRenderer } from 'electron';

import { MainApi, MainSyncApi, MainAsyncApi } from '../common/MainApi';

/**
 * This file cannot import non-types from other project modules
 * */

const syncApiKeys: (keyof MainSyncApi)[] = [
    'onAppReady',
    'getData',
    'getMigration',
    'getConfig',
    'setConfig',
    'newSave',
    'loadSave',
    'openConfig',
    'backupConfig',
    'loadBackupConfig',
    'getSave',
    'setSave',
    'openSave',
    'backupSave',
    'loadBackupSave',
    'importCustom',
    'exportCustom',
];

const asyncApiKeys: (keyof MainAsyncApi)[] = [
    'onAppRefresh'
];

function createApi<T extends Record<string, (...args: any[]) => any>>(
    keys: (keyof T)[],
    transport: (key: keyof T, ...args: any[]) => any,
) {
    return Object.fromEntries(
        keys.map((key) => [key, (...args: any[]) => transport(key, ...args)])
    ) as T;
}

const sync = createApi<MainSyncApi>(
    syncApiKeys,
    (key, ...args) => ipcRenderer.sendSync(key, ...args)
);

const async = createApi<MainAsyncApi>(
    asyncApiKeys,
    (key, ...args) => ipcRenderer.invoke(key, ...args)
);

contextBridge.exposeInMainWorld('electron', {
    ...sync,
    ...async,
} satisfies MainApi);
