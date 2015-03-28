var ClassUtils = function(obj){
  var string = '';
  for(var prop in obj){
    if(obj[prop] === true){
      string += (prop + ' ');
    }
  }
  return string;
}

module.exports = ClassUtils;