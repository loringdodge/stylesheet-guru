var React = require('react');

var PlayerTabsDemo = React.createClass({

	render: function() {
		return (
			<div className="player-tabs demo">
				<ul className="player-tabs-nav">
					<li className="selected">Final</li>
					<li>In Progress</li>
				</ul>
				<div className="player-tabs-windows">
					<div className="player-tabs-window-container" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
				</div>
			</div>
		);
	}

});

module.exports = PlayerTabsDemo;