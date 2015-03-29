var React = require('react');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var NotFound = React.createClass({

  displayName: 'NotFound',

  propTypes: {
    appState: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <main>
        <Header />
        <h2 className="text-size-30px text-align-center">Not Found</h2>
      </main>
    );
  }
});

module.exports = NotFound;
