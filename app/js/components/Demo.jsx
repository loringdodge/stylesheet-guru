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
      <div>
        <Header />
        <main>
          <Player player={this.props.appState.player} />
          <SearchResults search={this.props.appState.search} />
        </main>
      </div>
    );
  }
});

module.exports = HelloWorld;
