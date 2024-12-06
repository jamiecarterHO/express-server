const express = require('express');
const router = express.Router();

const getUser = require('./handlers/getUser');

router.get('/', (req, res) => { res.send('Hello world'); });
router.get('/full-name', getUser.fullName);

router.use(function (error, req, res, next) {
  const status = error.status || 500;
  res.status(status).send('Something went wrong');
});

router.use(function (req, res) {
  res.status(404).send('404: Page not found');
});

module.exports = router;
