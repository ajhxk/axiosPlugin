/*
const conf = {
  debounce: {
    // 防抖时间
    time: 500,
    // 是否开启防抖
    isActive: true,
    // 防抖时 过滤query
    isIgnoreQuery: true,
  },
  tokenParams: {
    url: null,
    keyName: 'token',
    getTokenFromResponse: ({ data = {} } = { data: {} }) => {
      return data['token'];
    },
  },
  tokenInject: {
    isActive: true,
    injectPlace: 'header',//'params'
  },
  tokenConnect: {
    isActive: true,
    connectMax: 8,
  },
};
*/

import debounceConf from './debounce';
import tokenConf from './token';
let _config = null;

export const init = conf => {
  _config = conf || {};
  // 初始化 防抖配置
  debounceConf.init(_config);
  // 初始化 token配置
  tokenConf.init(_config);
};

export const get = () => _config;

export const getDebounceConf = (config = {}) => {
  // 全局防抖配置
  const globDebConf = get().debounce;
  // 请求中传递过来的 防抖配置
  const reqDebConfig = config.debounce;
  const ret = Object.assign({}, globDebConf, reqDebConfig);
  return ret;
};

export const getTokenParamsConf = () => get().tokenParams;

export const getTokenInjectConf = () => get().tokenInject;

export const getTokenConnectConf = () => get().tokenConnect;

export const setTokenValue = value => (_config.tokenParams.value = value);

export default {
  init,
  get,
  getDebounceConf,
  getTokenParamsConf,
  getTokenInjectConf,
  getTokenConnectConf,

  setTokenValue,
};
