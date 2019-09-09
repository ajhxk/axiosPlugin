// 请求防抖 默认配置
const defaultConfig = {
  // 防抖时间
  time: 500,
  // 是否开启防抖
  isActive: true,
  // 防抖时 过滤query
  isIgnoreQuery: true,
};

export const init = (conf) => {
  const debounceConf = conf.debounce || {};
  const mixedDebounceConf = Object.assign({}, defaultConfig, debounceConf);
  conf.debounce = mixedDebounceConf;
};

export default {
  init,
};
