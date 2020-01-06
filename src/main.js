import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
Vue.component('pagination', require('laravel-vue-pagination'));

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
