import axios from 'axios'
import {injection} from '../src/main'
injection(axios)
export const do1 = () => {
  axios.get('http://yapi.med.guahao-inc.com/mock/587/cockpit/zhuyuan').then(res => {
    console.log(res)
  })
}
