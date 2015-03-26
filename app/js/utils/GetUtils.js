var GetUtils = function(property, obj){
	var obj = obj || this.props;
	if(obj.hasOwnProperty(property)){
		return obj[property];
	}
	for(var prop in obj) {
		return this.get(property, obj[prop]);
	}
}

module.exports = GetUtils;