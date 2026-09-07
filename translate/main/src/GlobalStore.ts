import { BrowserWindow } from 'electron';

export const GlobalStore: GlobalStore = {
    splashWindow: null,
    mainWindow: null,

    DEBUG_SPLASH_WINDOW: false,
    DEBUG_MAIN_WINDOW: false,
};

type GlobalStore = {
    splashWindow: BrowserWindow | null;
    mainWindow: BrowserWindow | null;

    DEBUG_SPLASH_WINDOW: boolean;
    DEBUG_MAIN_WINDOW: boolean;
};
