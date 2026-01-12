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
import MetaInfo from 'vue-meta-info';
import VueMeta from 'vue-meta';
 
Vue.use(VueMeta, {
  // 配置项
  keyName: 'metaInfo', // 组件中用来定义元信息的属性名
});

Vue.use(scroll)
Vue.use(scroll,{componentName: 'scroll-seamless'})
Vue.use(MetaInfo)
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
          let data = {
            ...res.data,
            url: JSON.parse(res.data.url).url,
            urlEn: JSON.parse(res.data.urlEn).url,
            mUrl: res.data.urlMobile ? JSON.parse(res.data.urlMobile).url : '',
            mUrlEn: res.data.urlMobileEn ? JSON.parse(res.data.urlMobileEn).url : ''
          }
          resolve(data)
        }
        if (res.data.type == 2) {
          let url = ''
          let data = {
            url: JSON.parse(res.data.url).url,
            urlEn: JSON.parse(res.data.urlEn).url,
            mUrl: res.data.urlMobile ? JSON.parse(res.data.urlMobile).url : '',
            mUrlEn: res.data.urlMobileEn ? JSON.parse(res.data.urlMobileEn).url : ''
          }
          resolve(data)
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
  render: (h) => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app');
