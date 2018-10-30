import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
/* 全局注册，使用方法为:this.$axios */
Vue.prototype.$http = axios
Vue.prototype.qs = qs

export default{}
