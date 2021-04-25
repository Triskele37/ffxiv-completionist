import { MainMenu } from '../../../renderer/main-content/nav-drawer/main-menu';
import { data } from '../../../data';

export const getters = {
    // isEmpty: (state) => !state.items.length
};

export function getGroupFromBreadcrumbs(breadcrumbs) {
    if(!breadcrumbs) return null;

    if(breadcrumbs.length === 1) {
        if(breadcrumbs[0] === 'FFXIV Completionist') return MainMenu;
        else return data;
    }

    let navGroup = { subGroups: [MainMenu, ...data.subGroups] };

    for(let i = 1; i < breadcrumbs.length && navGroup; i++) {
        navGroup = diveForGroup(navGroup, breadcrumbs[i]);
    }

    return navGroup;
}

function diveForGroup(group, targetName) {
    let ret;
    group.subGroups.forEach((subGroup) => {
        if(subGroup.name === targetName) ret = subGroup
    });
    return ret;
}
