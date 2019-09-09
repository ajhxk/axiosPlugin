import configModule from './config';
import { inject } from './inject';

const aiAxios = ({ axios, config } = {}) => {
  configModule.init(config);
  inject(axios);
};

export default aiAxios;
