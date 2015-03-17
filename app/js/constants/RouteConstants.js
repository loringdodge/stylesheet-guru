var AppConstants = require('./AppConstants');

var Pages = AppConstants.Pages;

module.exports = {

  RouteConfig: {
    DEFAULT_PATH: '/'
  },

  ROUTES: [
    [Pages.HOME, '/'],
    [Pages.DEMO, '/demo', '/demo/:url'],
  ]
};
