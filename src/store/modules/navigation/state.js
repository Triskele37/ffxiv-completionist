import { ipcRenderer } from 'electron';
import Store from 'electron-store';
const store = new Store();

import { getGroupFromBreadcrumbs } from './getters';

// Load previous state
const initialBreadcrumbs = store.get('last-breadcrumbs');
const initialSelectedGroup = getGroupFromBreadcrumbs(initialBreadcrumbs);
let loadDefaults = !initialBreadcrumbs;

function diveForGroup(group, targetName) {
    let ret;
    group.subGroups.forEach((subGroups) => {
        if(subGroups.name === targetName) ret = subGroups;
    });
    return ret;
}

// Current state
export const state = {
    breadcrumbs: loadDefaults ? ['Overall'] : initialBreadcrumbs,
    selectedGroup: loadDefaults ? null : initialSelectedGroup,
};

// Save the current navigation state before closing the app
ipcRenderer.on('beforeunload', (event, args) => {
    store.set('last-breadcrumbs', state.breadcrumbs);
});
