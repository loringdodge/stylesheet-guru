var React = require('react');

var Header = require('./Header.jsx');
var Player = require('./Player.jsx');
var SearchResults = require('./Search-results.jsx');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var HelloWorld = React.createClass({

  propTypes: {
    appState: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <main>
        <Header />
        <Player demo={this.props.appState.demo} />
        <SearchResults search={this.props.appState.search} />
      </main>
    );
  }
});

module.exports = HelloWorld;
