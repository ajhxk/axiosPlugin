const debounceConfig = {
  // 防抖时间
  time: 500,
  // 是否开启防抖
  isActive: true,
  // 防抖时 过滤query
  isIgnoreQuery: true
}

export const getDebounceConfig = (config = {}) => {
  let debConfig = config.debounce || {}

  debConfig = Object.assign({}, debounceConfig, debConfig)
  return debConfig
}
