import { getGroupFromBreadcrumbs } from './getters';

export const mutations = {
    PUSH_CRUMB: pushCrumb,
    POP_CRUMBS_UNTIL: popCrumbsUntil,
    SET_CRUMB_AT: setCrumbAt,

    SET_SELECTED_GROUP: setSelectedGroupTo,
};

//------------------------------------------------------- Crumb Mutation
function pushCrumb(state, crumb) {
    // concat so state mutates
    state.breadcrumbs = state.breadcrumbs.concat(crumb);

    // also set the selected group to match
    for(let i = 0; i < state.selectedGroup.subGroups.length; i++) {
        const subGroup = state.selectedGroup.subGroups[i];

        if(subGroup.name === crumb) {
            state.selectedGroup = subGroup;
            break;
        }
    }
}

function popCrumbsUntil(state, index) {
    // Step backward through breadcrumbs, pop until index is hit
    for(let i = state.breadcrumbs.length; i > -1; i--) {
        if(i - 1 === index) break;
        state.breadcrumbs.pop();
    }

    state.selectedGroup = getGroupFromBreadcrumbs(state.breadcrumbs);
}

function setCrumbAt(state, data) {
    let breadcrumbs = [];
    for(let i = 0; i < data.degree; i++) {
        breadcrumbs.push(state.breadcrumbs[i]);
    }

    state.breadcrumbs = breadcrumbs.concat(data.groupName);
}

//------------------------------------------------------- Group Mutation
function setSelectedGroupTo(state, group) {
    state.selectedGroup = group;
}
