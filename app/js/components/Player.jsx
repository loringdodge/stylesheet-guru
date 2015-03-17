var React = require('react');

var PlayerHeader = require('./Player-header.jsx');
var PlayerTabsCode = require('./Player-tabs-code.jsx');
var PlayerTabsDemo = require('./Player-tabs-demo.jsx');

var Player = React.createClass({

	propTypes: {
    appState: React.PropTypes.object.isRequired
  },

	render: function() {
		console.log("Player", this.props)
		return (
			<section id="player">
				<PlayerHeader />
				<PlayerTabsCode player={this.props.player} />
				<PlayerTabsDemo />
			</section>
		);
	}

});

module.exports = Player;