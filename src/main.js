import {requestInject} from './requestInjection/index'
import {injectResponseInterceptor} from './responseInterceptor'

export const injection = (axios = {}) => {
  requestInject(axios)
  injectResponseInterceptor(axios)
}

export default {injection}
