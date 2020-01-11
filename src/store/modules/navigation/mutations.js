export const mutations = {
    SET_BREADCRUMBS (state, data) {
        if(state.breadcrumbs[data.degree] === data.groupName) {
            // A group was clicked already in breadcrumbs
            while(state.breadcrumbs[data.degree] === data.groupName) {
                state.breadcrumbs.pop();
            }
        }
        else {
            // A new group was clicked
            let breadcrumbs = [];
            for(let i = 0; i < data.degree; i++) {
                breadcrumbs.push(state.breadcrumbs[i]);
            }

            state.breadcrumbs = breadcrumbs.concat(data.groupName);
        }
    },
    SET_SELECTED_GROUP (state, data) {
        state.selectedGroup = data;
    }
};
