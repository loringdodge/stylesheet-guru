var PlayerUtils = require('../utils/PlayerUtils');
var _ = require('underscore');

var Player = function(obj){

	var status;

	_.defaults(status, {
		currentStep: 0,
		totalSteps: 0,
		playSpeed: 1000,
		Q: PlayerUtils.makeQueue(),
		timeline: PlayerUtils.makeTimeline(obj),
		cssObject: obj,
	});

	var getCurrentStep = function(){
		return status.currentStep;
	}

	var resetCurrentStep = function(){
		status.currentStep = 0;
	}

	var getTotalSteps = function(){
		return status.totalSteps;
	}

	var getCssObject = function(){
		return status.cssObject;
	}

	var getPlaySpeed = function(){
		return status.playSpeed;
	}

	var increasePlaySpeed = function(){
		if(status.playSpeed > 200) {
			status.playSpeed -= 200;
		}
	}

	var decreasePlaySpeed = function(){
		if(status.playSpeed < 2000) {
			status.playSpeed += 200;
		}
	}

	var play = function(){

	}

	var pause = function(){
    // pause animation timeline
    Q.stop();
	}

	var next = function(){
    // move one step forward in timeline
    var step = status.timeline[status.currentStep];
    var func = PlayerUtils.makeAnimationFunc(step);
    Q.enqueue(func);
	}

	var previous = function(){
    // move one step backward in timeline w/out animation
    var step = status.timeline[status.currentStep];
	}

	return {
		getCurrentStep: getCurrentStep,
		resetCurrentStep: resetCurrentStep,
		getTotalSteps: getTotalSteps,
		getCssObject: getCssObject,
		getPlaySpeed: getPlaySpeed,
		increasePlaySpeed: increasePlaySpeed,
		decreasePlaySpeed: decreasePlaySpeed,
		play: play,
		pause: pause,
		next: next,
		previous: previous
	}
}

module.exports = Player;


