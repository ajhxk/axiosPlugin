import { setTokenValue, getTokenParamsConf, getTokenInjectConf } from '../../config';

const apiGetToken = (axios) => axios.get(getTokenParamsConf().url, { debounce: { isActive: false } });
const DATA_METHODS = ['post', 'put', 'patch'];
const PARAMS_METHODS = ['delete', 'get', 'head', 'options'];

const mergToken2Conf = ({ config, keyName, token }) => {
  if (PARAMS_METHODS.indexOf(config.method) !== -1) {
    !config.params && (config.params = {});
    config.params[keyName] = token;
  } else if (DATA_METHODS.indexOf(config.method) !== -1) {
    !config.data && (config.data = {});
    typeof config.data === 'string' && (config.data = JSON.parse(config.data));
    config.data[keyName] = token;
  }
};

export const tokenInject = axios => {
  const { isActive, injectPlace } = getTokenInjectConf();
  if (!isActive) return;
  axios.interceptors.request.use(
    async config => {
      const { url, value, keyName, getTokenFromResponse } = getTokenParamsConf();
      // 未设置url 退出注入token功能
      if (url === null) return config;
      let res, token;
      // header中注入token
      if (config.url !== url && value && injectPlace === 'header') {
        config.headers[keyName] = value;
      } else if (config.url !== url && value && injectPlace === 'params') {
        // params中注入token 已经获取过token
        mergToken2Conf({ config, token: value, keyName });
      } else if (config.url !== url && !value && injectPlace === 'header') {
        // header中注入token
        res = await apiGetToken(axios);
        token = getTokenFromResponse(res.data);
        setTokenValue(token);
        config.headers[keyName] = token;
      } else if (config.url !== url && !value && injectPlace === 'params') {
        // params中注入token 未获取过token
        res = await apiGetToken(axios);
        token = getTokenFromResponse(res.data);
        setTokenValue(token);
        mergToken2Conf({ config, token, keyName });
      }
      return config;
    },
    err => Promise.reject(err)
  );
};
