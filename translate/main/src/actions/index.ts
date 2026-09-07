import { ipcMain } from 'electron';

import { showMainWindow } from '../window/showMainWindow';
import { compare_i18n } from './compare_i18n';
import { compareResources } from './compare_data';
import { getVerifiedIpc } from './getVerified';
import { saveDataChange } from './saveDataChange';
import { saveVerified } from './saveVerified';

export function initActions() {
    ipcMain.on('app-ready', showMainWindow);
    ipcMain.on('get-verified', getVerifiedIpc);
    ipcMain.on('compare-i18n', compare_i18n);
    ipcMain.on('compare-data', compareResources);
    ipcMain.on('save-translation', saveDataChange);
    ipcMain.on('save-verified', saveVerified);
}
