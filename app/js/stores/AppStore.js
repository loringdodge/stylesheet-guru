var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Store = require('./Store');
var assign = require('react/lib/Object.assign');

var ActionTypes = AppConstants.ActionTypes;

var appState = {};

// function reset() {
//   appState = {};
// }

var AppStore = assign(new Store(), {
  getState: function() {
    return appState;
  }
});

AppStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.type) {
    case ActionTypes.APP_INITIALIZE:
      appState = {
        demo: action.demo,
        search: action.search,
        player: {
          current: 0,
          code: action.demo.css  
        }
      };

    case ActionTypes.SWITCH_PAGE:
      appState.page = action.page;
      appState.path = action.path;
      break;

    case ActionTypes.APP_RESET:
      reset();
      break;

    case ActionTypes.GET_SEARCH:
      appState.search = action.search;
      break;

    default:
      return;
  }

  AppStore.emitChange();
});

module.exports = AppStore;
