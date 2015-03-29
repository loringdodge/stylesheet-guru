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
        search: action.search
      };
      console.log(appState);

    case ActionTypes.SWITCH_PAGE:
      appState.page = action.page,
      appState.path = action.path,
      appState.demo = action.demo
      break;

    case ActionTypes.APP_RESET:
      reset();
      break;

    case ActionTypes.GET_SEARCH:
      appState.search = action.search;
      break;

    case ActionTypes.UPDATE_Q:
      appState.demo.q = action.q;
      appState.demo.pause = action.pause;
      break;

    case ActionTypes.UPDATE_CURRENT:
      appState.demo.current = action.current;
      break;

    case ActionTypes.UPDATE_CODEPANEL_PARENT:
      appState.demo.codePanel.parentNode = action.codePanel.parentNode;
      appState.demo.codePanel.parentHeight = action.codePanel.parentHeight;
      break;

    case ActionTypes.UPDATE_CODEPANEL_CHILD:
      appState.demo.codePanel.childTop = action.childTop;
      break;

    default:
      return;
  }

  AppStore.emitChange();
});

module.exports = AppStore;
