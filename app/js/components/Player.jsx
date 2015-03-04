var React = require('react');

var PlayerHeader = require('./Player-header.jsx');
var PlayerTabs = require('./Player-tabs.jsx');

var Player = React.createClass({

	render: function() {
		return (
			<section id="player">
				<div className="player-instance">
					<PlayerHeader />
					<PlayerTabs />
					<PlayerTabs />
				</div>
			</section>
		);
	}

});

module.exports = Player;