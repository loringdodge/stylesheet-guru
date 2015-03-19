var React = require('react');

var PlayerHeader = require('./Player-header.jsx');
var PlayerTabsCode = require('./Player-tabs-code.jsx');
var PlayerTabsDemo = require('./Player-tabs-demo.jsx');

var Player = React.createClass({

	propTypes: {
    appState: React.PropTypes.object.isRequired
  },

	render: function() {
		return (
			<section id="player">
				<PlayerHeader demo={this.props.demo} />
				<PlayerTabsCode demo={this.props.demo} />
				<PlayerTabsDemo />
			</section>
		);
	}

});

module.exports = Player;