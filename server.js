const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const config = require('./config');
const router = require('./router');
const logger = require('./lib/logger')({ env: config.env });

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

app.use(router);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  logger.log('info', `API server running on ${config.port}`);
});

module.exports = app;
