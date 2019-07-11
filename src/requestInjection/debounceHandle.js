import { getDebounceConfig } from '../config'
import {ignoreUrlQuery} from '../util'

const urlTimer = Object.create(null)

export const debounceHandle = ({config, request, axiosInstance, resolve, reject} = {}) => {
  const { time, isActive, isIgnoreQuery } = getDebounceConfig(config)

  if (isActive) {
    const url = isIgnoreQuery ? ignoreUrlQuery(config.url) : config.url
    clearTimeout(urlTimer[url])
    urlTimer[url] = setTimeout(() => {
      request.bind(axiosInstance)(config).then(resolve, reject)
    }, time)
  } else {
    request.bind(axiosInstance)(config).then(resolve, reject)
  }
}

// export const debounceHandlebak = (axios) => {
//   let Axios = axios.Axios

//   Axios.prototype.request = (function (nativeRequest) {
//     let injectRequest = function (config) {
//       return new Promise(function (resolve, reject) {
//         clearTimeout(urlTimer[config.url])
//         urlTimer[config.url] = setTimeout(() => {
//           console.log(config)
//           nativeRequest.bind(axios)(config).then(resolve, reject)
//         }, defaultConfig.delayTime)
//       })
//     }
//     return injectRequest
//   })(Axios.prototype.request)
// }

export default {debounceHandle}
