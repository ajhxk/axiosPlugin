const getTokenFromResponse = ({ data = {} } = { data: {} }) => {
  return data['token'];
};

const defaultTokenParams = {
  url: null,
  value: null,
  keyName: 'token',
  getTokenFromResponse,
};

const defaultTokenInject = {
  isActive: true,
  injectPlace: 'header',
};

const defaultTokenConnect = {
  isActive: true,
  connectMax: 8,
};

const init = conf => {
  conf.tokenParams = Object.assign(defaultTokenParams, conf.tokenParams);
  conf.tokenInject = Object.assign(defaultTokenInject, conf.tokenInject);
  conf.tokenConnect = Object.assign(defaultTokenConnect, conf.tokenConnect);
};

export default {
  init,
};
