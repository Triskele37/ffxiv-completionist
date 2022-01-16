import { app, Menu } from 'electron';

import { createNewStore, moveStoreLocation } from './modifyStore';
import { changeLanguage } from './changeLanguage';

// Determine environment
const isMac = process.platform === 'darwin';

export const addMenuItems = (window) => {
    const menuTemplate = [
        ...(isMac ? [APP_MENU] : []),
        FILE_MENU,
        PROGRESS_MENU(window),
        VIEW_MENU,
        SETTINGS_MENU(window),
        DEVELOPER_MENU,
    ];

    const menu = Menu.buildFromTemplate(menuTemplate as any);
    Menu.setApplicationMenu(menu);
};

//------------------------------------------------------------------
// Mac App Menu
//------------------------------------------------------------------
const APP_MENU = {
    label: app.name,
    submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
    ]
};

//------------------------------------------------------------------
// File Menu
//------------------------------------------------------------------
const FILE_MENU = {
    label: 'File',
    submenu: [
        isMac ? { role: 'close' } : { role: 'quit' }
    ]
};

//------------------------------------------------------------------
// Progress Menu
//------------------------------------------------------------------
const PROGRESS_MENU = (mainWindow) => ({
    label: 'Progress',
    submenu: [
        { label: 'New Character', click: createNewStore(mainWindow) },
        { label: 'Load Character', click: moveStoreLocation(mainWindow) },
    ]
});

//------------------------------------------------------------------
// View Menu
//------------------------------------------------------------------
const VIEW_MENU = {
    label: 'View',
    submenu: [
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
    ]
};

//------------------------------------------------------------------
// Settings Menu
//------------------------------------------------------------------
const SETTINGS_MENU = (mainWindow) => ({
    label: 'Settings',
    submenu: [
        { label: 'Change Language', click: changeLanguage(mainWindow) }
    ]
});

//------------------------------------------------------------------
// Developer Menu
//------------------------------------------------------------------
const DEVELOPER_MENU = {
    label: 'Developer',
    submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
    ]
};
