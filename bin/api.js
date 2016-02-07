require('babel-register');

const config = require('../config');
const server = require('../api/');
const debug = require('debug')('app:bin:api');

const host = config.api_host;
const port = config.api_port;

server.listen(port, host, function () {
  debug('API is now running at ' + host + ':' + port + '.');
});
