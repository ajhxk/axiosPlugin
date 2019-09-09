import { reconnectResponseHandle } from './reconnect';

export const injectResponse = axios => {
  window.setTimeout(() => {
    axios.interceptors.response.use(
      res => res,
      err => reconnectResponseHandle({ err, axios })
    );
  });
};
