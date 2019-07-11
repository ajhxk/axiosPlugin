# ai-axios

在axios v0.18.0的基础上，根据sdk的需求，增加了部分功能。

## 改造如下

1. 自动获取token，并将在token获取前发出的请求，存储起来，等token成功获取后再次请求；
2. 做防抖处理，在200ms内相同的请求会被合并成一个；
3. 

## Install
```shell
npm i -S ai-axios;
// 暂时未发布npm
```

## Quick Start
``` javascript
import axios from 'axios'
import {injection} from 'ai-axios';

injection(axios)
```

##### config
```js
// 默认开启防抖 防抖时忽略url后的query参数，但请求不受影响
axios({method: 'post',url: '/user/12345'});
axios.get('/aaa')
axios.post('/aaa')
```

```js
// 关闭防抖
axios({method: 'post',url: '/user/12345', debounce: {isActive: false}});
axios.get('/aaa', {debounce: {isActive: false}})
axios.post('/aaa',params,{debounce: {isActive: false}})
```

```js
// 设置防抖时间
axios({method: 'post',url: '/user/12345', debounce: {time: 1000}});
axios.get('/aaa', {debounce: {time: 1000}})
axios.post('/aaa',params,{debounce: {time: 1000}})
```

```js
// 防抖时不忽略url后的query参数
axios({method: 'post',url: '/user/12345', debounce: {isIgnoreQuery: false}});
axios.get('/aaa', {debounce: {isIgnoreQuery: false}})
axios.post('/aaa',params,{debounce: {isIgnoreQuery: false}})
```

