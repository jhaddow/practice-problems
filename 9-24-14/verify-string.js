var SimpleSymbols = function (str) {

	if (str[0].toLowerCase() !== str[0].toUpperCase() 
		|| str[str.length - 1].toLowerCase() !== str[str.length -1].toUpperCase()){
		return false;
	}

	for(var i = 1; i < str.length; i++){
		if(str[i].toLowerCase() !== str[i].toUpperCase()){

			if(str[i-1] !== '+' || str[i+1] !== '+'){
				return false
			}
		}
	}

	return true;
}