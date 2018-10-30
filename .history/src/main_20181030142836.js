// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iView'
import locale from 'iview/dist/locale/zh-CN'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './styles/base.less'
require('./mock')

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(iView, {locale})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
