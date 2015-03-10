var React = require('react');

var PlayerTabsCode = React.createClass({

	render: function() {
		return (
			<div className="player-tabs code">
				<ul className="player-tabs-nav background-color-grey-back">
					<li className="selected">CSS</li>
					<li>HTML</li>
				</ul>
				<div className="player-tabs-windows background-color-white">
					<div className="player-tabs-window-container"></div>
					<div className="player-tabs-window-container">


					</div>
				</div>
			</div>
		)
	}

});

module.exports = PlayerTabsCode;