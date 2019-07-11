// import axios from 'axios'
import axios from '../static/axios'
import {injection} from '../src/main'
// import {injection} from '../dist/static/js/ai-axios'
injection(axios)

export const do1 = () => axios.get('http://yapi.med.guahao-inc.com/mock/587/cockpit/zhuyuan?a=1&b=1', {
  debounce: {isActive: true}
})

export const do2 = () => axios.get('http://yapi.med.guahao-inc.com/mock/587/cockpit/summary?a=1&b=1', {
  debounce: {isIgnoreQuery: true}
})

export const do3 = () => axios.post('http://yapi.med.guahao-inc.com/mock/587/groupfeedback',
  {typejj: 0, statusfk: 1, number: 2},
  {
    debounce: {isIgnoreQuery: true, isActive: true}
  })

export const do4 = () => axios.post('http://22yapi.med.guahao-inc.com/mock/5899/groupfeedback1',
  {typejj: 0, statusfk: 1, number: 2}
)
