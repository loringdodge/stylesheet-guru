var React = require('react');

var PlayerMenu = React.createClass({

	render: function() {
		return (
			<div className="player-menu">
				<div className="btn background-color-green">PLAY</div>
				<div className="btn background-color-red">PAUSE</div>
				<div className="btn background-color-blue">NEXT</div>
				<div className="btn background-color-orange">BACK</div>
			</div>
		);
	}

});

module.exports = PlayerMenu;