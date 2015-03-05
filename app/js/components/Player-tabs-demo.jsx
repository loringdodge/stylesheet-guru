var React = require('react');

var PlayerTabsDemo = React.createClass({

	render: function() {
		return (
			<div className="player-tabs demo">
				<ul className="player-tabs-nav background-color-grey-back">
					<li className="selected">Final</li>
					<li>In Progress</li>
				</ul>
				<div className="player-tabs-window background-color-white">
					<div></div>
					<div></div>
				</div>
			</div>
		)
	}

});

module.exports = PlayerTabsDemo;