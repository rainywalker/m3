function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function(){
			oldonload();
			func();
		}
	}

}

function test() {
	var ddd = document.getElementById("tst");
	var cch = ddd.getElementsByTagName("a")[0];
	cch.onclick = function(){
		chrome.tabs.getSelected(null,function(tab){
			var currentURL = tab.url;
			
			alert(currentURL);

        	
  	 	 });

		
		

	
	}
}

addLoadEvent(test)