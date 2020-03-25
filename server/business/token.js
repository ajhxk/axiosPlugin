let TOKEN = null;
const TOKEN_HEADER = 'asses_token';
const UNTOKEN_TIME = 10 * 1000;

const initToken = () => {
  TOKEN = `${TOKEN_HEADER}${new Date().getTime()}`;
  console.log(`initToken: ${TOKEN}`);
};

const refreshToken = () => {
  TOKEN = `${TOKEN_HEADER}${new Date().getTime()}`;
  console.log(`refreshToken: ${TOKEN}`);
};

const getTokenNum = timeStr => Number(timeStr.split(TOKEN_HEADER)[1]);

const isEnToken = (token = null) => {
  console.log('token', token);
  refreshToken();
  let isEnToken = false;

  if (token !== null) {
    const tokenTime = getTokenNum(TOKEN);
    const apiTime = getTokenNum(token);
    if (Math.abs(tokenTime - apiTime) < UNTOKEN_TIME) {
      isEnToken = true;
    }
  }
  return isEnToken;
};

// const getToken = () => TOKEN;
const getToken = () => {
  refreshToken();
  return TOKEN;
};

const getTokenResKey = () => TOKEN_HEADER;

const getTokenKey = () => TOKEN_HEADER;

module.exports = {
  initToken,
  refreshToken,
  getTokenNum,
  isEnToken,
  getToken,
  getTokenResKey,
  getTokenKey,
};
