var $ = require('jquery');
var _ = require('underscore');
var HTML = require('html-parse-stringify');

// var Properties = require('../Player/Properties');
// var PseudoElements = require('../Player/PseudoElements');

var PlayerUtils = {

  extendDemoState : function(obj){
    return _.extend(obj, {
      current: 0,
      timeline: PlayerUtils.makeTimeline(obj.css),
      q: null,
      pause: true,
      codePanel:{
        parentNode: {},
        parentHeight: null,
        scrollSpeed: 1000,
        scrollPaddingTop: 40,
        scrollPaddingBottom: 65,
      },
      html: PlayerUtils.addClassesToElements(HTML.parse(obj.html), 'code-html-default')
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
          value: value
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

  addClassesToString : function(string, classes){
    return _.reduce(classes, function(acc, str){
      return acc += (' ' + str);
    }, string);
  },

  addClassesToElements : function(obj){
    var classes = Array.prototype.slice.call(arguments, 1);
    return _.map(obj, function(element){
      element.attrs.class = PlayerUtils.addClassesToString(element.attrs.class, classes);
      return element;
    })
  },

  // isPseudoElement : function(property){
  //   return PseudoElements.hasOwnProperty(property);
  // },

  // isValidProperty : function(property){
  //   return Properties.hasOwnProperty(property);
  // }

}

module.exports = PlayerUtils;