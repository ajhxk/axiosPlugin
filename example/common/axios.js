/* eslint-disable no-unused-vars */
import axios from 'axios';
import aiAxios from '../../src/main';
import { requestHandle, responseHandle } from './private';
const aiAxiosConf = {
  debounce: {
    // 防抖时间
    time: 500,
    // 是否开启防抖
    isActive: true,
    // 防抖时 过滤query
    isIgnoreQuery: true,
  },
  tokenParams: {
    url: '/token/getToken',
    keyName: 'asses_token',
    getTokenFromResponse: ({ data = {} } = { data: {} }) => {
      return data['asses_token'];
    },
  },
  tokenInject: {
    isActive: true,
    // header
    injectPlace: 'header',
  },
  tokenConnect: {
    isActive: true,
    connectMax: 8,
  },
};

aiAxios({ axios, config: aiAxiosConf });
// requestHandle(axios);
responseHandle(axios);

export default axios;
