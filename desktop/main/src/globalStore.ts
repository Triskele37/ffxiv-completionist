import { BrowserWindow } from 'electron';
import { ConfigObj } from '../../common/Config';
import { PlayerSave } from '../../common/PlayerSave';

export const GlobalStore: GlobalStore = {
    config: null,

    splashWindow: null,
    mainWindow: null,

    DEBUG_SPLASH_WINDOW: false,
    DEBUG_MAIN_WINDOW: false,
    LOG_MEMORY: false,
    LOG_IPC_CHAIN: false,
};

type GlobalStore = {
    isServe?: boolean;
    senderUrl?: string;

    splashWindow: BrowserWindow | null;
    mainWindow: BrowserWindow | null;
    maximizeWindowOnShow?: boolean;

    configPath?: string;
    configBackupPath?: string;
    config: ConfigObj | null;

    savePath?: string;
    save?: PlayerSave;
    queuedSave?: NodeJS.Timeout;

    // Debug Flags
    DEBUG_SPLASH_WINDOW: boolean;
    DEBUG_MAIN_WINDOW: boolean; // shows the main window regardless of load state (allows console access)
    LOG_MEMORY: boolean;
    LOG_IPC_CHAIN: boolean;
};
