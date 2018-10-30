import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
/* 全局注册，使用方法为:this.$axios */
Vue.prototype.$axios = axios;
Vue.prototype.qs = qs;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

// 封装axios的post请求
export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default{
  JH_news (url, params) {
    return fetch(url, params)
  }
}
