import Vue from 'vue';
import App from './App';

import { vStore } from '../store';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

new Vue({
    store: vStore,
    components: { App },
    template: '<App/>',
}).$mount('#app');
