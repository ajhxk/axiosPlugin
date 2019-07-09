import debounceHandle from './debounceHandle'

export const injection = (axios = {}) => {
  const Axios = axios.Axios
  debounceHandle(Axios)
}

export default {injection}
