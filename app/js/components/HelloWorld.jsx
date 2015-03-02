var React = require('react');

var Header = require('./Header.jsx');

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
        <h1>Hello World!</h1>
        <Navigate page={Pages.HOME}>Go to "home"</Navigate>
      </div>
    );
  }
});

module.exports = HelloWorld;
