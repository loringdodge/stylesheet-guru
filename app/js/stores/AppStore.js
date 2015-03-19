var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Store = require('./Store');
var assign = require('react/lib/Object.assign');
var PlayerUtils = require('../utils/PlayerUtils')

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
        demo: PlayerUtils.extendDemoState(action.demo),
        search: action.search
      };

    case ActionTypes.SWITCH_PAGE:
      console.log(action.demo);
      appState.page = action.page,
      appState.path = action.path,
      appState.demo = PlayerUtils.extendDemoState(action.demo)
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
