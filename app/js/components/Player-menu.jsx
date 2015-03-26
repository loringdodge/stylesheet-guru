var React = require('react');
var AppActions = require('../actions/AppActions');
var PlayerUtils = require('../utils/PlayerUtils');
var GetUtils = require('../utils/GetUtils');

var PlayerMenu = React.createClass({

	get: GetUtils,

	play: function() {
		console.log('play');
		var demo = this.get('demo');
		var Q = this.get('q') || PlayerUtils.makeQueue();
		var timeline = this.get('timeline');

		AppActions.triggerPlay(Q, false);

		var that = this;

		var recurseQueue = function() {
			var current = that.get('current');
			var func = timeline[current];
			var pause = that.get('pause');

			Q.queue(function(){
				if(current === timeline.length || pause === true) {
					return;
				}
				console.log('yes');
				setTimeout(function() {
					Q.queue(recurseQueue());
					Q.dequeue();
				},1000);
				AppActions.triggerNext(current, timeline.length);
			});
		}

		recurseQueue();

	},

	pause: function() {
		console.log('pause');
		var Q = this.get('q');
		if(Q !== null) Q.finish();
		AppActions.triggerPause(Q, true);
	},

	next: function() {
		console.log('next');
		this.pause();
		var current = this.get('current');
		var timeline = this.get('timeline');
		if(current < timeline.length) AppActions.triggerNext(current, timeline.length);
	},

	back: function() {
		console.log('back');
		this.pause();
		var current = this.get('current');
		if(current > 0) AppActions.triggerBack(current);
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