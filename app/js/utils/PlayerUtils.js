var properties = require('../Player/Properties');
var $ = require('jquery');
var _ = require('underscore');

var PlayerUtils = {

	////////// Core //////////

	extendDemoState : function(obj){
		return _.extend(obj, { 
			current: 0,
			timeline: PlayerUtils.makeTimeline(obj.css)
		});
	},

	makeTimeline : function(cssObj){
		// parse css obj and turn it into a timeline object
	  var timeline = [];
	  _.each(cssObj, function(item){
	  	_.each(item.properties, function(value, property){
	  		var temp = {
	  			selector: item.selector,
	  			property: property,
	  			value: value
	  		};
	  		timeline.push(temp);
	  	})
	  });
	  return timeline;
	},

	increaseCurrent : function(current, max){
		return (current < max) ? ++current : current;
	},

	decreaseCurrent : function(current){
		return (current > 0) ? --current : current;
	},

	play : function(demo){
		// play animation timeline
		console.log("Play");
	},

	pause : function(demo){
    // pause animation timeline
    console.log("Pause");
	},

	next : function(demo){
    // move one step forward in timeline
    console.log("Next");
	},

	back : function(demo){
    // move one step backward in timeline w/out animation
 		console.log("Previous");
	}

}

module.exports = PlayerUtils;