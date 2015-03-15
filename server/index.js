////////// Use source maps in stack traces //////////
if (process.env.NODE_ENV !== 'production') {
  require('source-map-support').install();
}

////////// Modules //////////
var express = require('express');
var morgan = require('morgan');

var ApiRouter = require('./api/ApiRouter');
var DemoRouter = require('./demo/DemoRouter');

var ServerConstants = require('./constants/ServerConstants');
var Config = ServerConstants.Config;

var server = express();

////////// Connect to database: 'rethinkDB' //////////
var r = require('./db/RethinkConnect');

////////// Routes //////////
server.use(morgan('dev'));
server.use('/', express.static(Config.PUBLIC_DIR));

server.use('/api', ApiRouter);

server.use('/demo', DemoRouter);

server.listen(Config.PORT);

console.log('Server started with NODE_ENV="%s" on PORT="%s"', Config.NODE_ENV, Config.PORT);
