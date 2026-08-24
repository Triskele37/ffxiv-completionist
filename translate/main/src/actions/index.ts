import { ipcMain } from 'electron';

import { WindowStore } from '../WindowStore';

import { compare_i18n } from './compare_i18n';
import { compareResources } from './compare_data';
import { getVerified } from './getVerified';
import { saveVerified } from './saveVerified';

export function initActions() {
    ipcMain.on('app-ready', WindowStore.showMainWindow);
    ipcMain.on('compare-i18n', compare_i18n);
    ipcMain.on('compare-data', compareResources);
    ipcMain.on('get-verified', getVerified);
    ipcMain.on('save-verified', saveVerified);
}
