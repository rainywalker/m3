/*
NTS UIT Yoon Jae Min
m1 = "main";
m2 = "me";
m3= "map";
*/

var doc = window.document;



//Find id, class 



function m3(str) {
	if (str.charAt(0) === "#") {
		var objId = doc.getElementById(str.slice(1))
			}
	else if (str.charAt(0) === ".") {
		var all = doc.getElementsByTagName("*");
		var all_length = all.length;
		for (var i=0; i<all_length; i++) {
			if (all[i].className != " ") {
				if (all[i].className === str.slice(1)) {
					var objClass = str.slice(1);
				}
			}
			else {
				return false
			}

		}
	}
	
}

	
