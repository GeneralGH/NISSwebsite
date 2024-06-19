import Vue from 'vue';
import TDesign from 'tdesign-vue';
import 'tdesign-vue/es/style/index.css';
import VueRouter from 'vue-router'
import router from './router.js';
import PageHeader from './components/pageHeader.vue';
import PageFooter from './components/pageFooter.vue';
import axiosInstance from './util/request';
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
Vue.use(scroll,{componentName: 'scroll-seamless'})
// import './util/flexible.js'
import './util/rem'

Vue.component('PageHeader', PageHeader);
Vue.component('PageFooter', PageFooter);

import App from './App.vue';

Vue.use(TDesign);
Vue.use(VueRouter)

Vue.prototype.$request = axiosInstance;

Vue.prototype.$getPageContent = function(id) {
  return new Promise((resolve, reject) => {
    this.$request.get('/api/pageConfig/getPageConfigById/' + id)
      .then(res => {
        if (res.data.type == 2) {
          let url = JSON.parse(res.data.url).url
          resolve(url)
        } else {
          reject(new Error("Invalid page type"))
        }
      })
      .catch(err => {
        reject(err)
      })
  })
};


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
