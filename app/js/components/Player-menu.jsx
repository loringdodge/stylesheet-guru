var React = require('react');
var AppActions = require('../actions/AppActions');

var PlayerMenu = React.createClass({

	play: function() {
		AppActions.triggerPlay(this.props.demo);
	},

	pause: function() {
		AppActions.triggerPause(this.props.demo);
	},

	next: function() {
		AppActions.triggerNext(this.props.demo);
	},

	back: function() {
		AppActions.triggerBack(this.props.demo);
	},

	render: function() {
		return (
			<div className="player-menu">
				<div className="btn background-color-green" onClick={this.play}>PLAY</div>
				<div className="btn background-color-red" onClick={this.pause}>PAUSE</div>
				<div className="btn background-color-blue" onClick={this.next}>NEXT</div>
				<div className="btn background-color-orange" onClick={this.back}>BACK</div>
			</div>
		);
	}

});

module.exports = PlayerMenu;