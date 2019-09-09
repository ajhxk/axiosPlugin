import { debounceHandle } from './debounce';
import { getDebounceConf } from '../../config';
import { tokenInject } from './tokenInject';

export const injectRequest = (axios) => {
  const Axios = axios.Axios;
  // request 注入aop
  Axios.prototype.request = (nativeRequest => {
    // request inject公共入口
    const newRequest = function newRequest (config) {
      let ret = null;
      const isDebounce = getDebounceConf(config).isActive;
      if (isDebounce) {
        ret = new Promise((resolve, reject) => {
          // 防抖处理
          debounceHandle({ config, resolve, reject, request: nativeRequest, axiosInstance: axios });
        });
      } else {
        ret = nativeRequest.bind(axios)(config);
      }

      return ret;
    };

    return newRequest;
  })(Axios.prototype.request);

  tokenInject(axios);
};
