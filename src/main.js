import Vue from 'vue';
import TDesign from 'tdesign-vue';
import 'tdesign-vue/es/style/index.css';
import VueRouter from 'vue-router'
import router from './router.js';
import PageHeader from './components/pageHeader.vue';
import PageFooter from './components/pageFooter.vue';
import axiosInstance from './util/request';
// import './util/flexible.js'
import './util/rem'

Vue.component('PageHeader', PageHeader);
Vue.component('PageFooter', PageFooter);

import App from './App.vue';

Vue.use(TDesign);
Vue.use(VueRouter)

Vue.prototype.$request = axiosInstance;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
