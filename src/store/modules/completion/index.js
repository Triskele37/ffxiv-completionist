import { state } from './state';
import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';

export const completion = {
    namespaced: false,
    state,
    mutations,
    getters,
    actions
};
