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

function url_rep(){
	chrome.tabs.query({active: true}, function(tabArray) {
		if (window.localStorage.length > 0){
			var currentURL = tabArray[0].url.toLowerCase();
			var url_addr = currentURL.substr(8);
			var https = "http://";
			$("#url_set").hide()

			$.ajax({
			    type: "GET",
				url: "http://10.67.20.239/m3/expand/url_replace/documentRoot.php",
				crossDomain: true,
				dataType: "xml",
				success: function(xml) {
					var ip = document.getElementById("ip");
					var com_name = document.getElementById("com_name");
					var local_ip = $(xml).find("dir").text();
					ip.innerHTML = local_ip;
					com_name.innerHTML = localStorage.key(localStg_key)
					var doc_root = document.getElementById("doc_root");
					var root_val = doc_root.value.toLowerCase();
					//var key = root_val
					if (currentURL.indexOf("file://") != -1){

						var localStg_key = localStorage.getItem(root_val)

						var re_url = url_addr.replace(localStorage.key(localStg_key),local_ip+"/");
						//var ch_url = re_url.substr(2)
						var sum = https + re_url
						chrome.tabs.update({url: sum});
						console.log(sum,localStorage.key(localStg_key))
					}
					else {
						console.log("your protocol = http")
					}

				}
			})
		}
		else {
			url_set.style.display = "block";
			$.ajax({
			    type: "GET",
				url: "http://10.67.20.239/m3/expand/url_replace/documentRoot.php",
				crossDomain: true,
				dataType: "xml",
				success: function(xml) {
					var local_ip =  $(xml).find("dir").text() + "/";
					var doc_root = document.getElementById("doc_root");
					var btn_ipt = document.getElementById("btn_ipt");
					btn_ipt.onclick = function(){
						
						var currentURL = tabArray[0].url.toLowerCase();
						var url_addr = currentURL.substr(8);
						var https = "http://";
						var root_val = doc_root.value.toLowerCase();
						
						var key = root_val
						localStorage.setItem(key,root_val);
						//strArr.push(key);
						//localStorage.setItem(root_val,root_val);
						
						if (currentURL.indexOf("file:") != -1){
							
							var localStg_key = localStorage.getItem(key)

							var re_url = url_addr.replace(localStorage.key(localStg_key),local_ip);
							//var ch_url = re_url.substr(2)
							var sum = https + re_url;
							chrome.tabs.update({url: sum});
							var ip = document.getElementById("ip");
							var com_name = document.getElementById("com_name");
							ip.innerHTML = local_ip;
							com_name.innerHTML = localStorage.key(localStg_key)
							console.log(sum,localStorage.key(localStg_key))
						}
						else {
							console.log("failed")
						}
					
					}
				}
			})
		}
	});
	

}
addLoadEvent(url_rep)
