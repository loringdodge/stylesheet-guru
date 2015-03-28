var keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    APP_INITIALIZE: null,
    APP_RESET: null,
    SWITCH_PAGE: null,
    GET_SEARCH: null,
    SET_CURRENT: null,
    PLAYER_PLAY: null,
    PLAYER_PAUSE: null,
    UPDATE_CODEPANEL_PARENT: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  Pages: keyMirror({
    HOME: null,
    DEMO: null,
    NOT_FOUND: null
  }),

  LayoutConfig: {
    // Keep in sync with `server/constants/ServerConstants.js`
    ROOT_ELEMENT_ID: 'ReactRootElement'
  }
};
