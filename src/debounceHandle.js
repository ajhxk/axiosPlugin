import {debounce} from './util'

export const debounceHandle = (Axios) => {
  let isImmediate = true
  let wait = 500
  Axios.prototype.request = debounce(Axios.prototype.request, wait, isImmediate)
}

export default debounceHandle
