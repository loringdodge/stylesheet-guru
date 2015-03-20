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
	}

}

module.exports = PlayerUtils;