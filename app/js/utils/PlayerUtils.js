var properties = require('./Player/properties');

var PlayerUtils = {

	makeTimeline : function(obj){
		// parse css obj and turn it into a timeline object
	},

	makeQueue : function(){
		return $({});
	},

	makeAnimationFunc : function(step){
		// creates an animation func with callback
		return function(){
    	$(selector).animate({})
    }
	},

	isValidProperty : function(property){
		// is the property valid CSS?
	},

	isValidValue : function(value){
		// is the value valid CSS?
	},

	isAnimatable : function(property){
    // return whether the property can be animated
	},



}

module.exports = PlayerUtils;