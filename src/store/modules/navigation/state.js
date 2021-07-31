import { eStore } from "../../electronStore";
import { vStore } from "../../index";

setTimeout(() => {
    // Load previous state & update defaults
    const initialBreadcrumbs = eStore.get('last-breadcrumbs');
    if(!!initialBreadcrumbs) {
        vStore.commit('navigation/SET_BREADCRUMBS', initialBreadcrumbs);
    }
}, 0);



// Current state
export const state = {
    breadcrumbs: ['Overall'],
    selectedGroup: null,
};
