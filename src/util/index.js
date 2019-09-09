/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param isImmediate true 表立即执行，false 表非立即执行
 */
export const debounce = (func, wait, isImmediate) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;

    if (timeout) clearTimeout(timeout);

    if (isImmediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
};

export const ignoreUrlQuery = url => url.split('?')[0];

export default {
  debounce,
  ignoreUrlQuery,
};
