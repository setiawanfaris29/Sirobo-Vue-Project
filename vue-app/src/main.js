import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { Row, Column } from 'vue-grid-responsive';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(VuePlyr)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('row', Row);
Vue.component('column', Column);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
