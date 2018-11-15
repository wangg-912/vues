import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
/* 全局注册，使用方法为:this.$axios */
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
