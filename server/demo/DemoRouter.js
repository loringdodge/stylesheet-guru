var express = require('express');
var DemoController = require('./DemoController');

var DemoRouter = express.Router();

DemoRouter.get('/:url', DemoController.getDemoByUrl);

module.exports = DemoRouter;