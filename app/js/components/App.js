var React = require('react');

var AppConstants = require('../constants/AppConstants');
var AppStore = require('../stores/AppStore');
var PopStateMixin = require('./Navigate').PopStateMixin;

var Pages = AppConstants.Pages;

function getPageComponent(page) {
  switch (page) {
    case Pages.HOME:        return require('./Home.jsx');
    case Pages.DEMO: return require('./Demo.jsx');
    case Pages.NOT_FOUND:   return require('./NotFound');
    default:
      throw new Error('Missing "Pages.' + page + '"');
  }
}

function getStateFromStores() {
  console.log("App.js: getStateFromStores()");
  return {
    appState: AppStore.getState()
  };
}

var App = React.createClass({

  displayName: 'App',

  mixins: [PopStateMixin],

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  render: function() {
    console.log("App.js: render", this.state.appState);
    var appState = this.state.appState;
    var PageComponent = getPageComponent(appState.page);
    console.log("App.js: PageComponent", PageComponent);
    return React.createElement(PageComponent, {appState: appState});
  }
});

module.exports = App;
