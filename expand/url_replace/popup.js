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
	chrome.tabs.query({currentWindow:true, active: true}, function(tabArray) {
        var currentURL = tabArray[0].url.toLowerCase();
        var doc_root = document.getElementById("doc_root");
        var btn_ipt = document.getElementById("btn_ipt");
        var https = "http://";
        var urlCut = currentURL.split("/");
        var macURL = urlCut.splice(6).join("/");
        var url_set = document.getElementById("url_set");
        var ip = document.getElementById("ip");
        var com_name = document.getElementById("com_name");
        //로컬스토리지에 key가 있을때

            if (localStorage.length > 0){

			$("#url_set").hide()
			$.ajax({
			    type: "GET",
				url: "http://topuit.naver.com/ip.jsp",
				crossDomain: true,
				dataType: "xml",
				success: function(xml) {
					var pmt = $(xml).find("addr").text() + "/";
					var root_val = doc_root.value.toLowerCase();
					if (currentURL.match("file://")){
                        var pc_substr = currentURL.substr(11);
                        var cut = pc_substr.split("/");

                        var pcURL = cut.splice(0).join("/")

                        var localKey = localStorage.getItem("key");
                        //var sss = pcURL.search(localKey)
                        localKey = pmt;

                        var pcBuild = https + localKey + pcURL;

                        chrome.tabs.update({url: pcBuild});
                        ip.innerHTML = pmt;
                        url_set.style.display = "none";
                        com_name.innerHTML = localStorage.key(localKey)
					}
					else {
						console.log("your protocol = http");
                        ip.innerHTML = pmt;
                        url_set.style.display = "none";
                        com_name.innerHTML = localStorage.key(localKey)
					}

				}
			})
		}
        //로컬스토리지에 key가 없을때
		else {

			$.ajax({
			    type: "GET",
				url: "http://topuit.naver.com/ip.jsp",
				crossDomain: true,
				dataType: "xml",
				success: function(xml) {
                    var pmt = $(xml).find("addr").text() + "/";
                    if (currentURL.match("file://")){
                        if (currentURL.match("users")) {
                            var macBulid = https + pmt + macURL;
                            chrome.tabs.update({url: macBulid});
                            ip.innerHTML = pmt;
                            com_name.innerHTML = "naver"
                            url_set.style.display = "none";
                        }
                        else {
                            var pc_substr = currentURL.substr(11);
                            var cut = pc_substr.split("/");
                            var pcURL = cut.splice(1).join("/")

                            btn_ipt.onclick = function(){
                                var root_val = doc_root.value.toLowerCase()
                                var key = root_val;
                                var ch_str = key.split("/").splice(0).join("/")
                                var final_URL = pcURL.replace(ch_str,"")
                                localStorage.setItem("key",root_val);
                                var localKey = localStorage.getItem(key);
                                localKey = pmt
                                var pcBuild = https + localKey + final_URL;
                                console.log(ch_str)
                                chrome.tabs.update({url: pcBuild});
                                ip.innerHTML = pmt;
                                com_name.innerHTML = "naver"
                                url_set.style.display = "none"
                            }

                        }
                    }
                    else {
                        ip.innerHTML = pmt;
                        com_name.innerHTML = "naver"
                        url_set.style.display = "none"
                        console.log(currentURL)
                    }

				}
			})
		}
	});
	

}

function get_local(){

}
addLoadEvent(url_rep)
