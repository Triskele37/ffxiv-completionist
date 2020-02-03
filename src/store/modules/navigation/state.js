import { ipcRenderer } from 'electron';
import { data } from '../../../data';
import Store from 'electron-store';
const store = new Store();

const breadcrumbs = store.get('last-breadcrumbs') || ['Overall', 'FFXIV Completionist'];

export const state = {
    breadcrumbs,
    selectedGroup: null,
    showSummary: true,
};

ipcRenderer.on('beforeunload', (event, args) => {
    store.set('last-breadcrumbs', state.breadcrumbs);
});
