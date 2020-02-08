import { data } from '../../../data';

export const getters = {
    // isEmpty: (state) => !state.items.length
};

export function getGroupFromBreadcrumbs(breadcrumbs) {
    if(!breadcrumbs) return null;

    let group = data;
    for(let i = 1; i < breadcrumbs.length; i++) {
        group = diveForGroup(group, breadcrumbs[i]);
        if(!group) return null;
    }
    return group;
}

function diveForGroup(group, targetName) {
    let ret;
    group.subGroups.forEach((subGroup) => {
        if(subGroup.name === targetName) ret = subGroup
    });
    return ret;
}
