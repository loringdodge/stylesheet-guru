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
    console.log("AppActions: navigateSwitchPage"+ action);
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
    // Ajax request here
    // On success:
    ServerUtils.getDemosByTitle()
      .then(function(data){
        console.log(data);
        // var action = {
        //   type: ActionTypes.GET_DEMOS,
        //   title: data
        // };
        // console.log("AppActions: getDemosByTitle"+ action);
        // AppDispatcher.handleServerAction(action);
      })
    // var a = [{
    //   "title" : "Speech Bubble",
    //   "keywords" : "keyframes"
    // }, {
    //   "title" : "Speech Bubble",
    //   "keywords" : "keyframes"
    // }, {
    //   "title" : "Speech Bubble",
    //   "keywords" : "keyframes"
    // }, {
    //   "title" : "Speech Bubble",
    //   "keywords" : "keyframes"
    // }];
    // console.log(a);
    //   var action = {
    //     type: ActionTypes.GET_DEMOS,
    //     title: a
    //   };
    //   console.log("AppActions: getDemosByTitle"+ action);
    //   AppDispatcher.handleServerAction(action);
  },

};

module.exports = AppActions;
