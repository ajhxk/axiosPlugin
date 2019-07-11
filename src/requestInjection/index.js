import {debounceHandle} from './debounceHandle'

export const requestInject = (axios) => {
  let Axios = axios.Axios

  // request 注入aop
  Axios.prototype.request = (nativeRequest => {
    // request inject公共入口
    let newRequest = function newRequest (config) {
      /**
       * todo
       * session 重连时 恢复之前的请求
       */

      // 这里统一包了层promise后期考虑 不开启防抖时 不包promise
      return new Promise((resolve, reject) => {
        // 防抖处理
        debounceHandle({config, resolve, reject, request: nativeRequest, axiosInstance: axios})
      })
    }

    return newRequest
  })(Axios.prototype.request)
}
