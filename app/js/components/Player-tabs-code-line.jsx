var React = require('react');
var ClassUtils = require('../utils/ClassUtils');

var PlayerTabsCodeLine = React.createClass({

	render: function() {
		switch(this.props.type) {
			case 'selector':
				return (
					<div className="code-block-row">
						<div className="code-block-row-number">{this.props.lineNumber}</div>
						<div className="code-block-row-line">
							<span className="selector">{this.props.selector}</span>
							<span className="syntax">&#123;</span>
						</div> 
					</div>
				);

			case 'property':
				var classes = ClassUtils({
					'code-block-row': true,
					'highlighted': this.props.highlighted
				});
				return (
					<div className={classes}>
						<div className="code-block-row-number">{this.props.lineNumber}</div>
						<div className="code-block-row-line">
							<span className="property">{this.props.property}</span>
							<span className="syntax">&#58;</span>
							<span className="value">{this.props.value}</span>
							<span className="syntax">&#59;</span>
						</div>
					</div>
				);

			case 'closing':
				return (
					<div className="code-block-row">
						<div className="code-block-row-number">{this.props.lineNumber}</div>
						<div className="code-block-row-line">
							<span className="syntax">&#125;</span>
						</div> 
					</div>

			);
		}
	}
});

module.exports = PlayerTabsCodeLine;