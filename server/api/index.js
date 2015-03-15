var express = require('express');
var ApiController = require('./ApiController');

var ApiRouter = express.Router();

ApiRouter.get('/demos/:title?', ApiController.findDemosByTitle);
ApiRouter.get('/demo/:id', ApiController.findDemoByUrl);

module.exports = ApiRouter;
