import { data } from "../../../data";

export const mutations = {
    SET_BREADCRUMBS (state, data) {
        let breadcrumbs = [];
        for(let i = 0; i < data.degree; i++) {
            breadcrumbs.push(state.breadcrumbs[i]);
        }

        state.breadcrumbs = breadcrumbs.concat(data.groupName);
    },
    GOTO_CRUMB (state, crumb) {
        for(let i = state.breadcrumbs.length; i > -1; i--) {
            if(state.breadcrumbs[i - 1] === crumb) break;
            state.breadcrumbs.pop();
        }

        let selectedGroup = data;
        for(let i = 0; i < state.breadcrumbs.length; i++) {
            for(let groupKey in selectedGroup.groupKeys) {
                if(state.breadcrumbs[i] === selectedGroup[groupKey].name) {
                    selectedGroup = selectedGroup[groupKey];
                }
            }
        }

        state.selectedGroup = selectedGroup;
    },
    SET_SELECTED_GROUP (state, data) {
        state.selectedGroup = data;
    },
    TOGGLE_SHOW_SUMMARY (state) {
        if(!state.selectedGroup || !state.selectedGroup.groupKeys) state.showSummary = false;
        else state.showSummary = !state.showSummary;
    }
};
