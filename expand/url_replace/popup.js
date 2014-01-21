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

function url_replace() {
	    chrome.tabs.query({active: true}, function(tabArray) {
	        var currentURL = tabArray[0].url.toLowerCase();
		 	$.ajax({
		        type: "GET",
		        url: "http://10.99.209.81:8080/ip.jsp",
		        crossDomain: true,
		        dataType: "xml",
		        success: function(xml) {
			    	 if (currentURL.indexOf("file://") != -1) {

			    	 	var url_addr = currentURL.substr(8)
						var https = "http://";
						var local_ip =  $(xml).find("information").text() + "/";

						if (!window.localStorage['key1']) {
							var docRoot = prompt("input the localHost DocumentRoot").toLowerCase();
							window.localStorage['key1'] = docRoot;
							console.log(window.localStorage['key1'])
							if (currentURL.indexOf(window.localStorage['key1']) != -1){
								var re_url = url_addr.replace(window.localStorage['key1'],local_ip);
								var sum = https + re_url;
								chrome.tabs.update({url: sum});
								document.getElementById("ip").innerHTML = local_ip;
							}
						}
						else {
							if (currentURL.indexOf(window.localStorage['key1']) != -1){
								var re_url = url_addr.replace(window.localStorage['key1'],local_ip);
								var sum = https + re_url;
								chrome.tabs.update({url: sum});
								document.getElementById("ip").innerHTML = local_ip;
							}
						}
						
					}
           
		         }
		    });
		    
	    });
}

function url_rep(){
	chrome.tabs.query({active: true}, function(tabArray) {
		var currentURL = tabArray[0].url.toLowerCase();
		var url_addr = currentURL.substr(8)
		var https = "http://";
		$.ajax({
		    type: "GET",
			url: "http://10.99.209.81:8080/ip.jsp",
			crossDomain: true,
			dataType: "xml",
			success: function(xml) {
				var local_ip =  $(xml).find("information").text() + "/";
				var doc_root = document.getElementById("doc_root")
				var btn_ipt = document.getElementById("btn_ipt")
				btn_ipt.onclick = function(){
					var root_val = doc_root.value;
					
						var data = [];
						data[0] = "1"
						data[1] = "2"
						data[2] = "3"
						localStorage.setItem("data",JSON.stringify(data))


						
						

						
						
					
					
				}
				
			}
		})
	})
}


addLoadEvent(url_rep)
