export const requestHandle = axios => {
  axios.interceptors.request.use(
    conf => {
      return conf;
    }, err => Promise.reject(err)
  );
};

export const responseHandle = axios => {
  axios.interceptors.response.use(
    res => res.data,
    err => {
      console.log('axios.interceptors.response:', err);
      return Promise.reject(err);
    }
    // err => new Promise(res => res, err => err)
  );
};
