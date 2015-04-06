var React = require('react');

var Header = require('./Header.jsx');
var HomeBanner = require('./Home-banner.jsx');
var SearchResults = require('./Search-results.jsx');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var Home = React.createClass({

  propTypes: {
    appState: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <main>
        <Header />
        <HomeBanner />
        <SearchResults search={this.props.appState.search} />
      </main>
    );
  }
});

module.exports = Home;
