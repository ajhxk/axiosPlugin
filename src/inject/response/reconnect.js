import reconnectCache from './reconnectCache';
import { setTokenValue, getTokenParamsConf, getTokenConnectConf } from '../../config';

const CODE_ACCESSTOKEN_INVALID = 401;
const STATE = {
  GETTING: 'getting',
  GETED: 'geted',
};

let connectIndex = 0;

// token失效
const isAccessTokenInvalid = (err = {}) => {
  const response = err.response || {};
  const status = response.status;
  return status === CODE_ACCESSTOKEN_INVALID;
};

const apiGetToken = (axios) => axios.get(getTokenParamsConf().url, { debounce: { isActive: false } });
const setAxiosTokenState = (axios, state) => { axios.defaults.tokenState = state; };
const setAxiosgettingToken = axios => setAxiosTokenState(axios, STATE.GETTING);
const setAxiosgetedToken = axios => setAxiosTokenState(axios, STATE.GETED);

export const reconnectResponseHandle = async ({ err, axios } = {}) => {
  const { url, getTokenFromResponse } = getTokenParamsConf();
  const { isActive, connectMax } = getTokenConnectConf();
  const tokenUrl = url;
  if (!isActive) return Promise.reject(err);
  if (connectIndex >= connectMax) {
    connectIndex = 0;
    return Promise.reject(err);
  }
  if (tokenUrl === null) return Promise.reject(err);
  // 非token失效错误
  if (!isAccessTokenInvalid(err)) return Promise.reject(err);

  // token 失效 并且当前处于正在获取token的状态
  if (STATE.GETTING === axios.defaults.tokenState) {
    let resolveHook = () => 'empty resolveHook';
    let rejectHook = () => 'empty rejectHook';
    const promise = new Promise((resolve, reject) => {
      resolveHook = resolve;
      rejectHook = reject;
      reconnectCache.push({ resolveHook, rejectHook, config: err.config });
    });
    return promise;
  } else if (typeof axios.defaults.tokenState === 'undefined' || STATE.GETED === axios.defaults.tokenState) {
    // token 失效 并且当前不是处于正在获取token的状态
    reconnectCache.clear();
    // 标定当前处于正在获取token状态
    setAxiosgettingToken(axios);
    // 获取token
    const tokenRes = await apiGetToken(axios);
    // 标定当前处于获取token完成状态
    setAxiosgetedToken(axios);
    // 缓存token值
    setTokenValue(getTokenFromResponse(tokenRes.data));

    // 重连目标请求
    const promise = axios(err.config);
    reconnectCache.every(cacheItem => {
      const { resolveHook, rejectHook, config } = cacheItem;
      axios(config).then(resolveHook, rejectHook);
    });
    reconnectCache.clear();
    connectIndex++;
    return promise;
  }
};
