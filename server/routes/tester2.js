const express = require('express');
var { isEnToken, getTokenKey } = require('../business/token');
const router = express.Router();
const queryTokenKey = getTokenKey();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/upload', (req, res, next) => {
  const token = req.body[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place: 'upload succ' }, message: 'succ' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'upload err' };
    res.status(401).send(JSON.stringify(response));
  }
});

router.post('/upload1', (req, res, next) => {
  const token = req.body[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place: 'upload1 succ' }, message: '' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'upload err' };
    res.status(401).send(JSON.stringify(response));
  }
});

router.post('/upload2', (req, res, next) => {
  const token = req.body[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place: 'upload2 succ' }, message: '' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'upload err' };
    res.status(401).send(JSON.stringify(response));
  }
});

router.post('/upload3', (req, res, next) => {
  const token = req.body[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place: 'upload3 succ' }, message: '' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'upload err' };
    res.status(401).send(JSON.stringify(response));
  }
});

router.get('/getupload', (req, res, next) => {
  const token = req.query[queryTokenKey];
  // const token = req.body[queryTokenKey];
  if (isEnToken(token)) {
    const response = { code: 0, data: { place: 'upload3 succ' }, message: '' };
    res.status(200).send(JSON.stringify(response));
  } else {
    const response = { code: 0, data: null, message: 'upload err' };
    res.status(401).send(JSON.stringify(response));
  }
});

module.exports = router;
