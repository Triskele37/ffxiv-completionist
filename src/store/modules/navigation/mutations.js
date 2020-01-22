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
            for(let j = 0; j < selectedGroup.subGroups.length; j++) {
                if(state.breadcrumbs[i] === selectedGroup.subGroups[j].name) {
                    selectedGroup = selectedGroup.subGroups[j]
                }
            }
        }

        state.selectedGroup = selectedGroup;
    },
    SET_SELECTED_GROUP (state, data) {
        // Normal code hits this if and escapes
        if(!state.breadcrumbs.includes('Debug')) {
            state.selectedGroup = data;
            return;
        }

        // Debug code here
        switch(data.name) {
            case 'Log Store': this.dispatch('logStore'); break;
            case 'Recalculate Summaries': this.dispatch('calculateCompletionSummaries'); break;
            case 'Nuke Store': this.dispatch('nukeStore'); break;
        }
    }
};
