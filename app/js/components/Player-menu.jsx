var React = require('react');

var PlayerMenu = React.createClass({

	render: function() {
		return (
			<div className="player-menu">
				<div className="player-menu-btn play">PLAY</div>
				<div className="player-menu-btn pause">PAUSE</div>
				<div className="player-menu-btn next">NEXT</div>
				<div className="player-menu-btn back">BACK</div>
			</div>
		);
	}

});

module.exports = PlayerMenu;