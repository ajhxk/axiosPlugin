import axios from './common/axios';

export const testergetPlace = () => axios.get('/tester/getPlace', { debounce: { isActive: false } });
export const testergetPlace1 = () => axios.get('/tester/getPlace1', { debounce: { isActive: false } });
export const testergetPlace2 = () => axios.get('/tester/getPlace2', { debounce: { isActive: false } });
export const testergetPlace3 = () => axios.get('/tester/getPlace3', { debounce: { isActive: false } });
export const testerpostPlace = () => axios.post('/tester/postPlace', { a: 1 }, { debounce: { isActive: false } });
export const testererr401 = () => axios.get('/tester/err401', { debounce: { isActive: false } });

export const tester2Upload = () => axios.post('/tester2/upload', { a: 1 }, { debounce: { isActive: false } });
export const tester2Upload1 = () => axios.post('/tester2/upload1', { a: 1 }, { debounce: { isActive: false } });
export const tester2Upload2 = () => axios.post('/tester2/upload2', { a: 1 }, { debounce: { isActive: false } });
export const tester2Upload3 = () => axios.post('/tester2/upload3', { a: 1 }, { debounce: { isActive: false } });
export const tester2getupload = () => axios.get('/tester2/getupload', { debounce: { isActive: false }, params: { a: 1 } });

export default {
  testergetPlace,
  testergetPlace1,
  testergetPlace2,
  testergetPlace3,
  testerpostPlace,
  testererr401,

  tester2Upload,
  tester2Upload1,
  tester2Upload2,
  tester2Upload3,
  tester2getupload,
};
