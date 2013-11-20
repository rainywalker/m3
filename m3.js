/*
NTS UIT Yoon Jae Min
m1 = "main";
m2 = "me";
m3= "map";
*/

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'fucntion') {
		window.onload = func;
	}
	else {
		window.onload = function(){
			oldonload();
			func()
		}
	}
}

function $(str) {
	if (str.indexOf("#") != -1) {
		var fixStr = str.split("#").join("")
		document.getElementById(fixStr)
		
	}
	else {
		console.log("x")
	}
}






