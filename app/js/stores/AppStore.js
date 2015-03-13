var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Store = require('./Store');
var assign = require('react/lib/Object.assign');

var ActionTypes = AppConstants.ActionTypes;

var _demos = [{
  "title" : "Speech Bubble",
  "keywords" : "keyframes"
}, {
  "title" : "Speech Bubble",
  "keywords" : "keyframes"
}];

var _playerCurrent = 0;

var _playerCode = [{
  "selector" : ".speech-bubble",
  "properties" : {
    "position" : "relative",
    "width" : "300px",
    "height" : "200px",
    "border-radius" : "50%",
    "background-color" : "#FFD464",
    "borderColor" : "transparent",
  }
},{
  "selector" : ".speech-bubble:after",
  "properties" : {
    "content" : "''",
    "position" : "absolute",
    "top" : "98%",
    "right" : "20%",
    "width" : "30px",
    "height" : "30px",
    "border-radius" : "50%",
    "background-color" : "#FFD464",
    "borderColor" : "transparent",
  },
},{
  "selector" : ".speech-bubble:before",
  "properties" : {
    "content" : "''",
    "position":  "absolute",
    "top" : "110%",
    "right" : "12%",
    "width" : "20px",
    "height" : "20px",
    "border-radius" : "50%",
    "background-color" : "#FFD464",
    "borderColor" : "transparent",
  }
}];

var appState = {
  _demos: _demos,
  _player: {
    _playerCurrent: _playerCurrent,
    _playerCode: _playerCode  
  }
};

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
      appState = appState;

    case ActionTypes.SWITCH_PAGE:
      console.log(action);
      appState.page = action.page;
      appState.path = action.path;
      break;

    case ActionTypes.APP_RESET:
      reset();
      break;

    case ActionTypes.GET_DEMOS:
      appState._demos = action.demos;
      break;

    default:
      return;
  }

  AppStore.emitChange();
});

module.exports = AppStore;
