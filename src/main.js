import './assets/css/reset.css'
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as API from '@/api'
import store from '@/store'
import router from '@/router'
Vue.prototype.$API = API 
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
