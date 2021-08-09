import { app, remote } from "electron";
import Store from "electron-store";

// determine which import has app since both Main and Renderer processes hit this code
const appImport = !!app ? app : remote.app;

//------------------------------------------------------------------
// electron-store: Data persistence utility
//------------------------------------------------------------------
// This should be the only instantiation of Store
const eStore = new Store();

// Set the default store location
setDefault('store-name', 'completion');
setDefault('store-loc', appImport.getPath('userData'));
setDefault('starting-class', '');
setDefault('chaining-enabled', false);
setDefault('chain-min-threshold', 10);
setDefault('table-filters', {
    completed: true,
    incomplete: true,
    excluded: true
});

export { eStore };

// Get the current targeted player store
export const getPlayerStore = (locOverride) => {
    const options = {
        name: eStore.get("store-name"),
        cwd: locOverride ? locOverride : eStore.get("store-loc")
    };

    return new Store(options);
};

function setDefault(storeKey, defaultValue) {
    if(eStore.get(storeKey) === undefined) {
        eStore.set(storeKey, defaultValue);
    }
}
