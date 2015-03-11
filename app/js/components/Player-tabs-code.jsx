var React = require('react');
var _ = require('underscore');

var PlayerTabsCode = React.createClass({

	getInitialState: function() {
		this.props.lineNumber = 0;
		this.props.times = [{
				"selector" : ".speech-bubble",
    		"properties" : {
				  "position" : "relative",
					"width" : "300px",
					"height" : "200px",
					"border-radius" : "50%",
					"background-color" : "#FFD464",
					"borderColor" : "transparent",
    		}
    	},{
    		"selector" : ".speech-bubble:after",
    		"properties" : {
    			"content" : "''",
					"position" : "absolute",
					"top" : "98%",
					"right" : "20%",
					"width" : "30px",
					"height" : "30px",
					"border-radius" : "50%",
					"background-color" : "#FFD464",
					"borderColor" : "transparent",
    		},
    	},{
    		"selector" : ".speech-bubble:before",
    		"properties" : {
    			"content" : "''",
					"position":  "absolute",
					"top" : "110%",
					"right" : "12%",
					"width" : "20px",
					"height" : "20px",
					"border-radius" : "50%",
					"background-color" : "#FFD464",
					"borderColor" : "transparent",
    		}
    }];
  	return {};
  },

	render: function() {
		return (
			<div className="player-tabs code">
				<ul className="player-tabs-nav">
					<li className="selected">CSS</li>
					<li>HTML</li>
				</ul>
				<div className="player-tabs-windows">
					<div className="player-tabs-window-container"></div>
					<div className="player-tabs-window-container">
						<div className="code-block">
							{ _.map(this.props.times, function(css) {
									return (
										<div>
											<div className="code-block-row">
												<div className="code-block-row-number">{++this.props.lineNumber}</div>
												<div className="code-block-row-line">
													<span className="selector">{css.selector}</span>
													<span className="syntax">&#123;</span>
												</div> 
											</div>
											{ _.map(css.properties, function(value, property) {
												return (
													<div className="code-block-row">
														<div className="code-block-row-number">{++this.props.lineNumber}</div>
														<div className="code-block-row-line">
															<span className="property">{property}</span>
															<span className="syntax">&#58;</span>
															<span className="value">{value}</span>
															<span className="syntax">&#59;</span>
														</div>
													</div>
												);
											}, this) }
											<div className="code-block-row">
												<div className="code-block-row-number">{++this.props.lineNumber}</div>
												<div className="code-block-row-line">
													<span className="syntax">&#125;</span>
												</div> 
											</div>
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