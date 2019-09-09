const express = require('express');
var { getToken, initToken, getTokenResKey } = require('../business/token');
const router = express.Router();

initToken();
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getToken', (req, res, next) => {
  const response = { code: 0, data: { [getTokenResKey()]: getToken() }, message: 'succ' };
  res.status(200).send(JSON.stringify(response));
});

module.exports = router;
