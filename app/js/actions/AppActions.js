var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var RouteUtils = require('../utils/RouteUtils');
var ServerUtils = require('../utils/ServerUtils');
var PlayerUtils = require('../utils/PlayerUtils');

var ActionTypes = AppConstants.ActionTypes;
var SearchResponse = AppConstants.SearchResponse;
var _ = require('underscore');

var AppActions = {

  initialize: function(bootstrap) {
    if (!bootstrap) bootstrap = {};
    var path = RouteUtils.getBestAvailablePath(bootstrap.path);
    var page = RouteUtils.getPage(path);
    var demo = PlayerUtils.extendDemoState(bootstrap.demo);
    bootstrap.path = path;
    bootstrap.page = page;
    bootstrap.demo = demo;
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
          demo: PlayerUtils.extendDemoState(demo)
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

  updateQ: function(q, pause) {
    var action = {
      type: ActionTypes.UPDATE_Q,
      q: q,
      pause: pause
    };
    AppDispatcher.handleViewAction(action);
  },

  updateCurrent: function(current){
    var action = {
      type: ActionTypes.UPDATE_CURRENT,
      current : current
    };
    AppDispatcher.handleViewAction(action);
  },

  updateCodePanelParent: function(node, height) {
    var action = {
      type: ActionTypes.UPDATE_CODEPANEL_PARENT,
      codePanel:{
        parentNode: node,
        parentHeight: height
      }
    };
    console.log(action);
    AppDispatcher.handleViewAction(action);
  }

};

module.exports = AppActions;
