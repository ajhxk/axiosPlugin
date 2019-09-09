import { injectRequest } from './request';
import { injectResponse } from './response';

export const inject = axios => {
  injectRequest(axios);
  injectResponse(axios);
};
