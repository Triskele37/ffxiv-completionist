import Vue from 'vue';
import App from './App';

import Icon from './components/Icon';
import StatusIndicator from "./components/StatusIndicator";

import { vStore } from '../store';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

Vue.component('icon', Icon);
Vue.component('status-indicator', StatusIndicator);

new Vue({
    store: vStore,
    components: { App },
    template: '<App/>',
}).$mount('#app');
