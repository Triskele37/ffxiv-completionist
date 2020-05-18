import { eStore } from "../../electronStore";

import { getGroupFromBreadcrumbs } from './getters';

// Load previous state
const initialBreadcrumbs = eStore.get('last-breadcrumbs');
const initialSelectedGroup = getGroupFromBreadcrumbs(initialBreadcrumbs);
let loadDefaults = !initialBreadcrumbs;

// Current state
export const state = {
    breadcrumbs: loadDefaults ? ['Overall'] : initialBreadcrumbs,
    selectedGroup: loadDefaults ? null : initialSelectedGroup,
};
