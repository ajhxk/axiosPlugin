/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param isImmediate true 表立即执行，false 表非立即执行
 */
export const debounce = (func, wait, isImmediate) => {
  let timeout
  return function () {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)

    if (isImmediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}

export const debounce2 = (func, wait) => {
  let timeout
  return function () {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)

    let callNow = !timeout
    timeout = setTimeout(() => {
      timeout = null
    }, wait)

    if (callNow) func.apply(context, args)
  }
}

export default {
  debounce
}
