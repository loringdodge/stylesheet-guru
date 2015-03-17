var properties = require('./Player/properties');

var PlayerUtils = {

	////////// Core //////////

	makeTimeline : function(obj){
		// parse css obj and turn it into a timeline object
	},

	makeQueue : function(){
		return $({});
	},

	makeAnimationFunc : function(step){
		// creates an animation func with callback
		return function(){
    	$(selector).animate({});
    }
	},

	makeCssFunc : function(step){
		// creates a css func with callback
		return function(){
    	$(selector).css({});
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

	addInitialBorder: function() {
		// Adds the initial border to an element so it can be seen
	},

	////////// Additional Features //////////	

	addInitialBorder: function() {
		// Adds the initial border to an element so it can be seen
	},





}

module.exports = PlayerUtils;