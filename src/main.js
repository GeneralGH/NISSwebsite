import Vue from 'vue';
import TDesign from 'tdesign-vue';
import 'tdesign-vue/es/style/index.css';
import VueRouter from 'vue-router'
import router from './router.js';
import PageHeader from './components/pageHeader.vue';
import PageFooter from './components/pageFooter.vue';
import axiosInstance from './util/request';
import scroll from 'vue-seamless-scroll'
import store from './store/index.js';

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
Vue.prototype.$store = store;

Vue.prototype.$getPageContent = function(id) {
  return new Promise((resolve, reject) => {
    this.$request.get('/api/pageConfig/getPageConfigById/' + id)
      .then(res => {
        if (id == 3) {
          resolve(res.data)
        }
        if (res.data.type == 2) {
          let url = JSON.parse(res.data.url).url
          resolve(url)
        } else if(res.data.type == 1) {
          resolve(res.data)
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
  store,
  router,
  render: (h) => h(App)
}).$mount('#app');
