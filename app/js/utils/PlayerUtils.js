var $ = require('jquery');
var _ = require('underscore');

var Properties = require('../Player/Properties');

var PlayerUtils = {

	////////// Core //////////

	extendDemoState : function(obj){
		return _.extend(obj, { 
			current: 0,
			timeline: PlayerUtils.makeTimeline(obj.css),
			q: null,
			pause: true
		});
	},

	makeTimeline : function(cssObj){
	  var timeline = [];
	  var index = 0;
	  _.each(cssObj, function(item){
	  	_.each(item.properties, function(value, property){
	  		var temp = {
	  			id: index,
	  			selector: item.selector,
	  			property: property,
	  			value: value,
	  			func: PlayerUtils.makeAnimationFunc(item.selector, property, value)
	  		};
	  		timeline.push(temp);
	  		index++;
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

	makeQueue : function() {
		return $({});
	},

	makeAnimationFunc : function(selector, property, value) {
		var temp = {};
    temp[property] = value;
		return function(){
			$(selector).animate(temp, 1000);
		}
	},

	makeCssFunc : function(selector, property, value) {
		var temp = {};
    temp[property] = value;
		return function(){
			$(selector).css(temp);
		}
	},

	hasReachedTop : function(height, parent, padding){
		var padding = padding || 40;
		return (height + padding) > parent;
	},

	hasReachedBottom : function(height, parent, padding){
		var padding = padding || 40;
		return (height + padding) > parent;
	},

	scrollParent : function(child, parent, padding){
		if(PlayerUtils.hasReachedTop) parent.scrollBy(0, padding);
	}

}

module.exports = PlayerUtils;