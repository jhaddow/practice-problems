var nonrpeated = function(str){
	for(var i = 1; i < str.length; i++){
		if(str.substr(0,i).indexOf(str[i]) === -1 &&
			str.substr(i+1).indexOf(str[i] === -1)){
			return str[i];
		}
	}

	return false;
}

console.log(nonrpeated('ABA'));
console.log(nonrpeated('AABCABD'));	