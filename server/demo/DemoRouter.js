var express = require('express');
var DemoController = require('./DemoController');

var DemoRouter = express.Router();

DemoRouter.get('/', DemoController.initializeDemo);
DemoRouter.get('/demo/:url', DemoController.initializeDemo);

module.exports = DemoRouter;