import Vue from 'vue';
import Vuex from 'vuex';

import { modules } from './modules';

//------------------------------------------------------------------
// vuex: Global UI level data utility
//------------------------------------------------------------------
Vue.use(Vuex);

export const vStore = new Vuex.Store({
    modules,
});
