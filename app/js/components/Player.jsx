var React = require('react');

var PlayerHeader = require('./Player-header.jsx');

var Player = React.createClass({

	render: function() {
		return (
			<section id="player">
				<div className="player-instance">
					<PlayerHeader />
				</div>
			</section>
		);
	}

});

module.exports = Player;