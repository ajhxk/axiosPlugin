import { getDebounceConf } from '../../config';
import { ignoreUrlQuery } from '../../util';

const urlTimer = Object.create(null);

export const debounceHandle = ({ config, request, axiosInstance, resolve, reject } = {}) => {
  const { time, isIgnoreQuery } = getDebounceConf(config);
  const url = isIgnoreQuery ? ignoreUrlQuery(config.url) : config.url;

  clearTimeout(urlTimer[url]);
  urlTimer[url] = setTimeout(() => {
    request.bind(axiosInstance)(config).then(resolve, reject);
  }, time);
};

export default { debounceHandle };
