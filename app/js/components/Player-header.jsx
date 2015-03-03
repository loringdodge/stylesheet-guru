var React = require('react');

var PlayerMenu = require('./Player-menu.jsx');

var PlayerHeader = React.createClass({

	render: function() {
		return (
			<div className="player-header background-color-yellow">
				<h2 className="player-header-title text-bold-500">Speech Bubble</h2>
				<p className="player-header-desc text-size-14px">How to create a speech bubble using :after and :before</p>
			</div>
		);
	}

});

module.exports = PlayerHeader;