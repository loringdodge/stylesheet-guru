var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var RouteUtils = require('../utils/RouteUtils');
var ServerUtils = require('../utils/ServerUtils');

var ActionTypes = AppConstants.ActionTypes;
var SearchResponse = AppConstants.SearchResponse;

var AppActions = {

  initialize: function(bootstrap) {
    if (!bootstrap) bootstrap = {};
    var path = RouteUtils.getBestAvailablePath(bootstrap);
    var page = RouteUtils.getPage(path);
    var action = {
      type: ActionTypes.APP_INITIALIZE,
      path: path,
      page: page
    };
    AppDispatcher.handleServerAction(action);
  },

  reset: function() {
    AppDispatcher.handleServerAction({
      type: ActionTypes.APP_RESET
    });
  },

  navigateSwitchPage: function(path, page) {
    var action = {
      type: ActionTypes.SWITCH_PAGE,
      page: page,
      path: path
    };
    AppDispatcher.handleViewAction(action);
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

  getDemosByTitle: function() {
    ServerUtils.getDemosByTitle(function(data){
        var action = {
          type: ActionTypes.GET_DEMOS,
          title: data
        };
        AppDispatcher.handleServerAction(action);
      })
  },

};

module.exports = AppActions;
