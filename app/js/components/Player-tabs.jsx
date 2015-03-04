var React = require('react');

var PlayerTabs = React.createClass({

	render: function() {
		return (
			<div className="player-tabs">
				<ul className="player-tabs-nav background-color-grey-back">
					<li>CSS</li>
					<li>HTML</li>
				</ul>
				<div className="player-tabs-window background-color-white">
					<div></div>
					<div></div>
				</div>
			</div>
		)
	}

});

module.exports = PlayerTabs;