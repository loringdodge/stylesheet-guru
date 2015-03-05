var React = require('react');

var PlayerHeader = require('./Player-header.jsx');
var PlayerTabsCode = require('./Player-tabs-code.jsx');
var PlayerTabsDemo = require('./Player-tabs-demo.jsx');

var Player = React.createClass({

	render: function() {
		return (
			<section id="player">
				<PlayerHeader />
				<PlayerTabsCode />
				<PlayerTabsDemo />
			</section>
		);
	}

});

module.exports = Player;