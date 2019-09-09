const express = require('express');
var { isEnToken, getTokenKey } = require('../business/token');
const router = express.Router();
const queryTokenKey = getTokenKey();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getPlace', (req, res, next) => {
  const token = req.headers[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place: 'aaa' }, message: 'err' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'err' };
    res.status(401).send(JSON.stringify(response));
  }
});

router.get('/getPlace1', (req, res, next) => {
  const token = req.headers[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place1: 'aaa' }, message: 'err' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'err' };
    res.status(401).send(JSON.stringify(response));
  }
});

router.get('/getPlace2', (req, res, next) => {
  const token = req.headers[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place2: 'aaa' }, message: 'err' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'err' };
    res.status(401).send(JSON.stringify(response));
  }
});

router.get('/getPlace3', (req, res, next) => {
  const token = req.headers[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place3: 'aaa' }, message: 'err' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'err' };
    res.status(401).send(JSON.stringify(response));
  }
});

router.post('/postPlace', (req, res, next) => {
  const token = req.headers[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place3: 'aaa' }, message: 'err' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'err' };
    res.status(401).send(JSON.stringify(response));
  }
});

router.get('/err401', (req, res, next) => {
  const response = { code: 0, data: null, message: 'err402' };
  res.status(401).send(JSON.stringify(response));
});

module.exports = router;
