var React = require('react');
var _ = require('underscore');

var PlayerTabsCodeLine = require('./Player-tabs-code-line.jsx');

var PlayerTabsCode = React.createClass({

	render: function() {
		var lineNumber = 1;
		return (
			<div className="player-tabs code">
				<ul className="player-tabs-nav">
					<li className="selected">CSS</li>
					<li>HTML</li>
				</ul>
				<div className="player-tabs-windows">
					<div className="player-tabs-window-container">
						<div className="code-block">
							{ _.map(this.props.demo.css, function(css) {
									return (
										<div>
											<PlayerTabsCodeLine type={'selector'} selector={css.selector} lineNumber={lineNumber++} />
											{ _.map(css.properties, function(value, property) {
												return (
													<PlayerTabsCodeLine type={'property'} property={property} value={value} lineNumber={lineNumber++} />
												);
											}, this) }
											<PlayerTabsCodeLine type={'closing'} lineNumber={lineNumber++} />
									</div>);
			        }, this) }
						</div>
					</div>
				</div>
			</div>
		)
	}

});

module.exports = PlayerTabsCode;