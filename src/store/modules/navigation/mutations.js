import { getGroupFromBreadcrumbs } from './getters';

export const mutations = {
    PUSH_CRUMB: pushCrumb,
    POP_CRUMBS_UNTIL: popCrumbsUntil,
    SET_CRUMB_AT: setCrumbAt,

    SET_SELECTED_GROUP: setSelectedGroupTo,
    TOGGLE_SHOW_SUMMARY (state) {
        if(!state.selectedGroup || !state.selectedGroup.groupKeys) state.showSummary = false;
        else state.showSummary = !state.showSummary;
    }
};

//------------------------------------------------------- Crumb Mutation
function pushCrumb(state, crumb) {
    // concat so state mutates
    state.breadcrumbs = state.breadcrumbs.concat(crumb);

    // also set the selected group to match
    for(let i = 0; i < state.selectedGroup.groupKeys.length; i++) {
        const groupKey = state.selectedGroup.groupKeys[i];

        if(state.selectedGroup[groupKey].name === crumb) {
            state.selectedGroup = state.selectedGroup[groupKey];
            break;
        }
    }
}

function popCrumbsUntil(state, crumb) {
    // Step backward through breadcrumbs, pop until crumb is found
    for(let i = state.breadcrumbs.length; i > -1; i--) {
        if(state.breadcrumbs[i - 1] === crumb) break;
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

//------------------------------------------------------- Show All
