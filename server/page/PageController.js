////////// Modules //////////
var _ = require('underscore');
var fs = require('fs');
var htmlescape = require('htmlescape');

var ServerConstants = require('../constants/ServerConstants');
var ApiRouter = require('../api/ApiRouter');
var RethinkUtils = require('../db/RethinkUtils');
var PlayerUtils = require('../../app/js/utils/PlayerUtils');

var Config = ServerConstants.Config;
var LayoutConfig = ServerConstants.LayoutConfig;

var layout = _.template(fs.readFileSync(Config.LAYOUT_FILE, 'utf8'));

////////// Page Controller //////////
var PageController = {

  initializePage: function(bootstrap, url) {

    var layoutData = _.defaults({
      applicationStart: 'Application.start(' + htmlescape(bootstrap) + ');',
    }, LayoutConfig);

    var status;

    if (Config.SSR) {
      var Application = require(Config.APPLICATION_FILE);
      var rootComponentHTML = Application.start(bootstrap);
      layoutData.rootComponentHTML = rootComponentHTML;

      status = 200;

      if(url !== undefined){
        status = Application.RouteUtils.hasDatabaseMatch(url, bootstrap.demo.url) ? 200 : 404;
      }

    } else {
      status = 200;
    }

    var markup = layout(layoutData);

    return {
      status: status,
      markup: markup
    }

  },

  getHomePage: function(req, res){

    RethinkUtils.findDemosByTitle()
      .then(function(search){

        var bootstrap = {
          path: '/',
          search: search
        };

        var response = PageController.initializePage(bootstrap);

        res.status(response.status).send(response.markup);

    })
    .catch(function(err) {
      res.status(400).end();
    });

  },

  getDemoPage: function(req, res){
    var url = req.params.url;

    RethinkUtils.findDemoByPath(url)
      .then(function(demo) {
        return [demo, RethinkUtils.findDemosByTitle()];
      })
      .spread(function (demo, search) {
        var bootstrap = {
          path: '/demo',
          demo: PlayerUtils.extendDemoState(demo),
          search: search
        };

        var response = PageController.initializePage(bootstrap, url);

        res.status(response.status).send(response.markup);
      })
      .catch(function(err) {
        res.status(400).end();
      });
  }
}

module.exports = PageController;