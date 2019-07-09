import axios from 'axios';

let axiosConfig = {
  accessToken: null
};
// let retryCount = 0;

axios.interceptors.request.use(
  config => {
    console.time('start');
    // config.transformRequest = [(data) => {
    //   // return new Promise((resolve, reject) => {
    //   //   setTimeout(() => {
    //   //     resolve(data);
    //   //   }, 1000);
    //   // });
    // }];
    config.proxy = {
      host: 'yapi.med.guahao-inc.com'
    };
    return config;
  },
  error => Promise.reject(error)
);

// 响应劫持
axios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return err;
  }
);

// axios.post('http://192.168.94.185:9001/aidrg/login', {
//   userName:"13888888888",
//   password:"123456"
// }).then(res => {
//   console.timeEnd('start');
// });

axios.post('http://127.0.0.1/mock/591/aidrgAdmin/login', {
  userName:"13888888888",
  password:"123456"
}).then(res => {
  console.timeEnd('start');
});
