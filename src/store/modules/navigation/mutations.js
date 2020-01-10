export const mutations = {
    SET_BREADCRUMBS (state, data) {
        let breadcrumbs = [];
        for(let i = 0; i < data.degree; i++) {
            breadcrumbs.push(state.breadcrumbs[i]);
        }

        state.breadcrumbs = breadcrumbs.concat(data.groupName);
    },
    SET_SELECTED_GROUP (state, data) {
        state.selectedGroup = data;
    }
};
