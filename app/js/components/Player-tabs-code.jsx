var React = require('react');
var _ = require('underscore');
var AppActions = require('../actions/AppActions');
var GetUtils = require('../utils/GetUtils');

var PlayerTabsCodeLine = require('./Player-tabs-code-line.jsx');

var PlayerTabsCode = React.createClass({

	get: GetUtils,

	componentDidMount: function() {
		var component = React.findDOMNode(this.refs.codeContainer);
		var parentHeight = component.offsetHeight;
		AppActions.updateCodePanelParent(component, parentHeight);
	},

	render: function() {
		var codePanel = this.get('codePanel');
		var lineNumber = 1;
		var index = -1;
		var current = this.get('current');
		return (
			<div className="player-tabs code">
				<ul className="player-tabs-nav">
					<li className="selected">CSS</li>
					<li>HTML</li>
				</ul>
				<div className="player-tabs-windows">
					<div className="player-tabs-window-container">
						<div className="code-block" ref="codeContainer">
							{ _.map(this.get('css'), function(css) {
									return (
										<div >
											<PlayerTabsCodeLine type={'selector'} selector={css.selector} lineNumber={lineNumber++} />
											{ _.map(css.properties, function(value, property) {
												index++;
												return (
													<PlayerTabsCodeLine current={current} index={index} codePanel={codePanel} type={'property'} property={property} value={value} lineNumber={lineNumber++} />
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