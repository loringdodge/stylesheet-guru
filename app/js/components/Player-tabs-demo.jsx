var React = require('react');
var HTML = require('html-parse-stringify');
var GetUtils = require('../utils/GetUtils');

var PlayerTabsDemo = React.createClass({

	get: GetUtils,

	componentWillMount: function () {
 
	},

	render: function() {
		return (
			<div className="player-tabs demo">
				<ul className="player-tabs-nav">
					<li className="selected">Final</li>
					<li>In Progress</li>
				</ul>
				<div className="player-tabs-windows">
					<div className="player-tabs-window-container" dangerouslySetInnerHTML={{__html: HTML.stringify(this.props.html)}}></div>
				</div>
			</div>
		);
	}

});

module.exports = PlayerTabsDemo;