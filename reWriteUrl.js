(function() {

	/*
		  网页前端 － 适配跳转
		*/
	var domain = "qq.com";	
		
	var reWriteUrl = function(url) {
		if (url) {
			if (url.indexOf("/a/") > 0) {
				var Splits = url.split("/"),
					siteName = Splits[2].split(domain)[0].split(".").length == 3 ? siteName = Splits[2].split(domain)[0].split(".")[0] + "_" + Splits[2].split(domain)[0].split(".")[1] : siteName = Splits[2].split(domain)[0].split(".")[0],
					aids = url.split("/a/")[1].split(".htm")[0].replace(/[^0-9]/g, ""),
					site = "";
				if (typeof siteName !== "undefined" && typeof aids !== "undefined") {
					if (siteName.split(".").length > 2) {
						var len = siteName.split(".").length;
						for (var i = 0; i < len; i++) {
							site += siteName.split(".")[i];
							if (i < len - 2) {
								site += "_";
							}
						}
					} else {
						site = siteName.split(".")[0];
					}
					return "http://xw.qq.com/" + siteName + "/" + aids;
				}
			}
		}
	};
	
	var goToMobile = function() {
		var Aarry = document.getElementsByTagName("a"),
			TmpArray = [];
		for (var i = 0; i < Aarry.length; i++) {
			TmpArray[i] = Aarry[i].href.toString();
			if (TmpArray[i].split("/")[3] == "a") {
				Aarry[i].href = reWriteUrl(TmpArray[i]);
			}
		}

	}
	var mobileSietList = {
		news: "news",
		photo: "photo",
		video: "video",
		view: "huati",
		finance: "finance",
		ent: "ent",
		sports: "sports",
		digi: "digi",
		mil: "mil",
		lady: "lady",
		auto: "auto",
		games: "games",
		house: "house",
		astro: "astro",
		cul: "cul",
		fashion: "fashion",
		"2014": "shijiebei",
		"edu": "edu"
	};

	if (/Android|webOS|iPhone|Windows Phone|iPod|BlackBerry|SymbianOS/i.test(navigator.userAgent)) {
		/*底层页跳转*/
		var url = window.location.href;
		var pathname = window.location.pathname;
		if (url.indexOf("/a/") > 0 && window.location.hostname != "www.nanjing2014.org") {
			if (url.indexOf("?pc") < 0) {
				try {
					window.location.href = reWriteUrl(url);
				} catch (e) {}
			}
		} else { 
			// 频道首页跳转
			if (url.indexOf("?mobile") < 0) {
				var mobileUrl = window.location.hostname.split(".")[0];
				if (/news|pp|video|view|finance|ent|sports|digi|mil|fashion|auto|games|house|astro|cul|2014|edu/i.test(mobileUrl)) {
					try {
						window.location.href = 'http://xw.qq.com/m/' + mobileSietList[mobileUrl] + '/index.htm';
					} catch (e) {}
				}
			}
		}
		try {
			//document.addEventListener('DOMContentLoaded', goToMobile, false);
		} catch (e) {}
	}

})();