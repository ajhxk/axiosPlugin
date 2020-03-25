# ai-axios


## 改造如下

1. 自动获取token，并将在token获取前发出的请求，存储起来，等token成功获取后再次请求；
2. 做防抖处理，在200ms内相同的请求会被合并成一个；
3. 接口超时时，可以配置接口重连

## dev
```shell
启动接口服务：
npm run server
启动开发环境：
npm run dev
```

## Quick Start
``` javascript
import axios from 'axios'
import aiAxios from 'ai-axios';
aiAxios({axios})
```

## config
``` 传递配置参数方式
import aiAxios from 'ai-axios';
// 默认配置
const config = {
    // 防抖功能配置项
    debounce: {
        // 是否开启防抖
        isActive: true,
        // 防抖时间
        time: 500,
        // 防抖时 过滤query
        isIgnoreQuery: true
    },
    // token基本配置
    tokenParams: {
        url: null,
        keyName: 'token',
        getTokenFromResponse: ({ data = {} } = { data: {} }) => {
            return data['token'];
        },
    },
    // token 注入配置
    tokenInject: {
        isActive: true,
        injectPlace: 'header',
    },
    // token校验失败 重连配置
    tokenConnect: {
        isActive: true,
        connectMax: 8,
    },
};
aiAxios({axios, config})
```

##### 功能演示(防抖)
```js
// 默认开启防抖 防抖时忽略url后的query参数，但请求不受影响
axios({method: 'post',url: '/user/12345'});
axios.get('/aaa')
axios.post('/aaa')
```

```js
// 关闭防抖
// 局部关闭防抖
axios({method: 'post',url: '/user/12345', debounce: {isActive: false}});
axios.get('/aaa', {debounce: {isActive: false}})
axios.post('/aaa',params,{debounce: {isActive: false}})

// 全局配置
aiAxios({axios, {
    debounce: {
        isActive: false
    }
}})

// 优先级： 局部配置 > 全局配置 
```

```js
// 设置防抖时间
axios({method: 'post',url: '/user/12345', debounce: {time: 1000}});
axios.get('/aaa', {debounce: {time: 1000}})
axios.post('/aaa',params,{debounce: {time: 1000}})

// 全局配置
aiAxios({axios, {
    debounce: {
        time: 1000
    }
}})
// 优先级： 局部配置 > 全局配置 
```

```js
// 防抖时不忽略url后的query参数
axios({method: 'post',url: '/user/12345', debounce: {isIgnoreQuery: false}});
axios.get('/aaa', {debounce: {isIgnoreQuery: false}})
axios.post('/aaa',params,{debounce: {isIgnoreQuery: false}})
```

