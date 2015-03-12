var React = require('react');
var _ = require('underscore');

var PlayerTabsCode = React.createClass({

 	propTypes: {
    appState: React.PropTypes.object.isRequired
  },

	render: function() {
		console.log(this.props)
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
							{ _.map(this.props._player._playerCode, function(css) {
									return (
										<div>
											<div className="code-block-row">
												<div className="code-block-row-number">{++this.props._player._playerCurrent}</div>
												<div className="code-block-row-line">
													<span className="selector">{css.selector}</span>
													<span className="syntax">&#123;</span>
												</div> 
											</div>
											{ _.map(css.properties, function(value, property) {
												return (
													<div className="code-block-row">
														<div className="code-block-row-number">{++this.props._player._playerCurrent}</div>
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
												<div className="code-block-row-number">{++this.props._player._playerCurrent}</div>
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