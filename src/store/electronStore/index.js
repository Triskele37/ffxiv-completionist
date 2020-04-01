import { app, remote } from 'electron';
import Store from 'electron-store';

// determine which import has app since both Main and Renderer processes hit this code
const appImport = !!app ? app : remote.app;

//------------------------------------------------------------------
// electron-store: Data persistence utility
//------------------------------------------------------------------
export { applyStoreToData } from './applyStoreToData';
export { applyDataToStore } from './applyDataToStore';

// This should be the only instantiation of Store
const eStore = new Store();

// Set the default store location
if(!eStore.get('store-name')) eStore.set('store-name', 'completion');
if(!eStore.get('store-loc')) eStore.set('store-loc', appImport.getPath('userData'));

export { eStore };

// Get the current targeted player store
export const getPlayerStore = (locOverride) => {
    const options = {
        name: eStore.get('store-name'),
        cwd: locOverride ? locOverride : eStore.get('store-loc')
    };

    return new Store(options);
};
