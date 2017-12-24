
	function countdown(secs, elem){
		var element = document.getElementById(elem);
		element.innerHTML = "You have '+secs+' seconds";
		if (secs < 1){
			clearTimeout(timer);
		}
		secs--;
		var timer = setTimeout('countdown('+secs+', "'+elem+'")', 1000);
}