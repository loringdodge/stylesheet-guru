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
        console.log("Hello",this.props);
    return (
      <div>
        <Header />
        <main>
          <Player _player={this.props.appState._player} />
          <SearchResults _demos={this.props.appState._demos} />
        </main>
      </div>
    );
  }
});

module.exports = HelloWorld;
