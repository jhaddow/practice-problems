var reverseString = function (str) {
	var revStr = '';
	for(var i=str.length - 1; i >= 0; i--) {
		revStr += str[i];
	}
	return revStr;
}

alert(reverseString('Let\'s see if this works'));