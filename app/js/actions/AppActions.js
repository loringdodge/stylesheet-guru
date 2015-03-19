var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var RouteUtils = require('../utils/RouteUtils');
var ServerUtils = require('../utils/ServerUtils');

var ActionTypes = AppConstants.ActionTypes;
var SearchResponse = AppConstants.SearchResponse;
var _ = require('underscore');

var AppActions = {

  initialize: function(bootstrap) {
    if (!bootstrap) bootstrap = {};
    var path = RouteUtils.getBestAvailablePath(bootstrap.path);
    var page = RouteUtils.getPage(path);
    bootstrap.path = path;
    bootstrap.page = page;
    var action = {
      type: ActionTypes.APP_INITIALIZE,
    };
    _.extend(action, bootstrap);
    AppDispatcher.handleServerAction(action);
  },

  reset: function() {
    AppDispatcher.handleServerAction({
      type: ActionTypes.APP_RESET
    });
  },

  navigateSwitchPage: function(path, page) {
    ServerUtils.getDemoByPath(path, function(demo){
        var action = {
          type: ActionTypes.SWITCH_PAGE,
          page: page,
          path: path,
          demo: demo
        };
        AppDispatcher.handleViewAction(action);
      });
  },

  popStateSwitchPage: function(path) {
    var page = RouteUtils.getPage(path);
    var action = {
      type: ActionTypes.SWITCH_PAGE,
      page: page,
      path: path
    };
    AppDispatcher.handleViewAction(action);
  },

  getDemosByTitle: function(title) {
    var title = title || '';
    ServerUtils.getDemosByTitle(title, function(search){
        var action = {
          type: ActionTypes.GET_SEARCH,
          search: search
        };
        AppDispatcher.handleServerAction(action);
      });
  },

};

module.exports = AppActions;
