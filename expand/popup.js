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
	    chrome.tabs.query({active: true}, function(tabArray) {
	        var currentURL = tabArray[0].url;
	        if (currentURL.indexOf("file://") != -1) {
				var pmt = "localhost" //자신의 로컬호스트나 아이피를 입력하세요
				var url_addr = currentURL.substr(10)
				var https = "http://";
				var sum = https + pmt + url_addr;
				chrome.tabs.update({url: sum});
			}

	    });
	
	chrome.browserAction.onClicked.addListener(redirect);
}

addLoadEvent(test)