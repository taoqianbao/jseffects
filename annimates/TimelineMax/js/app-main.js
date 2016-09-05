"use strict";

function _classCallCheck(t, e) {
	if (!(t instanceof e))
		throw new TypeError("Cannot call a class as a function")
}

function PolygonFactory(t) {
	this.width = 200,
		this.height = 113,
		this.rowCount = t.rowCount || 5,
		this.colCount = t.colCount || 4,
		this.gutterX = 100,
		this.gutterY = 120,
		this.startX = random(-100, 0),
		this.leftX = -200,
		this.objects = [],
		this.container = t.container
}

function random(t, e) {
	return t + (e - t) * Math.random()
}

function slideScene() {
	var t = $(".line-boxes"),
		e = $("#iphone6 .scene-viewes"),
		i = $(".hero-scene-text"),
		n = $(".scene-slider-wrap .iphone-hand-bg"),
		r = $("#iphone6"),
		o = $("#iphone6 .topbar"),
		s = $("#iphone6 .camera"),
		a = $("#iphone6 .speaker"),
		l = $("#iphone6 .speaker-before"),
		u = $("#iphone6 .home"),

		c = new TimelineMax({
			yoyo: !1,
			repeat: -1
		});

	c.add([TweenLite.to(t, 1, {
			x: "-429",
			ease: Power3.easeInOut
		}), TweenLite.to(e, 1, {
			x: "-166",
			ease: Power3.easeInOut
		}), TweenLite.to(i, 1, {
			y: "-148",
			ease: Power3.easeInOut
		})], "+=2"),
		c.add([TweenLite.to(t, 1, {
			x: "-612",
			ease: Power3.easeInOut
		}), TweenLite.to(e, 1, {
			x: "-332",
			ease: Power3.easeInOut
		}), TweenLite.to(i, 1, {
			y: "-293",
			ease: Power3.easeInOut
		})], "+=2"),
		c.add([TweenLite.to(t, 1, {
			x: "-955",
			ease: Power3.easeInOut
		}), TweenLite.to(e, 1, {
			x: "-499",
			ease: Power3.easeInOut
		}), TweenLite.to(i, 1, {
			y: "-433",
			ease: Power3.easeInOut
		}), TweenLite.to(r, 1, {
			width: "423",
			height: "327",
			top: "18",
			left: "-106",
			padding: "34px 0 20px 0",
			backgroundColor: "#ffffff",
			borderTopLeftRadius: "16px",
			borderTopRightRadius: "16px",
			borderBottomLeftRadius: "0px",
			borderBottomRightRadius: "0px",
			ease: Power3.easeInOut
		}), TweenLite.to(o, 1, {
			backgroundColor: "#f5f5f5",
			borderTopLeftRadius: "16px",
			borderTopRightRadius: "16px"
		}), TweenLite.to(l, 1, {
			top: "13",
			left: "5%",
			width: "12px",
			height: "12px",
			backgroundColor: "rgba(216,216,216,1)",
			ease: Power3.easeInOut
		}), TweenLite.to(a, 1, {
			top: "13",
			left: "9%",
			width: "12px",
			height: "12px",
			borderRadius: "50%",
			backgroundColor: "rgba(216,216,216,1)",
			ease: Power3.easeInOut
		}), TweenLite.to(s, 1, {
			top: "13",
			left: "13%",
			width: "12px",
			height: "12px",
			borderRadius: "50%",
			backgroundColor: "rgba(216,216,216,1)",
			ease: Power3.easeInOut
		}), TweenLite.to(n, .8, {
			scale: .9,
			opacity: 0
		}), TweenLite.to(u, .8, {
			scale: .5,
			opacity: 0
		})], "+=2"),
		c.add([TweenLite.to(t, 1, {
			x: "-1235",
			ease: Power3.easeInOut
		}), TweenLite.to(e, 1, {
			x: "-922",
			ease: Power3.easeInOut
		}), TweenLite.to(i, 1, {
			y: "-573",
			ease: Power3.easeInOut
		}), TweenLite.to(r, 1, {
			width: "182",
			height: "380",
			left: "44",
			top: "8",
			borderRadius: "25px",
			padding: "44px 8px 40px 8px",
			backgroundColor: "#fcfcfc",
			ease: Power3.easeInOut
		}), TweenLite.to(o, 1, {
			backgroundColor: "#fcfcfc",
			borderTopLeftRadius: "25px",
			borderTopRightRadius: "25px"
		}), TweenLite.to(l, 1, {
			top: "18",
			left: "33%",
			width: "6px",
			height: "6px",
			backgroundColor: "rgba(39,38,38,1)",
			ease: Power3.easeInOut
		}), TweenLite.to(a, 1, {
			top: "20",
			left: "50%",
			width: "28px",
			height: "3px",
			borderRadius: "4px",
			backgroundColor: "rgba(29,28,28,1)",
			ease: Power3.easeInOut
		}), TweenLite.to(s, 1, {
			top: "8",
			left: "50%",
			width: "4px",
			height: "4px",
			borderRadius: "50%",
			backgroundColor: "rgba(29,28,28,1)",
			ease: Power3.easeInOut
		}), TweenLite.to(u, 1.7, {
			scale: 1,
			opacity: 1
		})], "+=2"),
		c.to(n, .5, {
			scale: 1,
			opacity: 1
		}, "-=1.2"),
		c.timeScale(1)
}

function resizeFrame() {
	var t = $(".line-box-wrap").width(),
		e = $(".line-boxes"),
		i = 295,
		n = 246,
		r = Math.ceil(t / 2),
		o = i - r,
		s = -(n + o);
	TweenLite.to(e, .1, {
			x: s,
			ease: Power3.easeInOut
		}),
		console.log("currentLeftOfLineBox:", s)
}

$(document).ready(function() {

	navigator.userAgent.match(/MicroMessenger/i) && $("body").prepend('<div style=" overflow:hidden; width:0px; height:0; margin:0 auto; position:absolute; top:-800px;"><img src="/assets/img/wxshare.png"></div>'),

		slideScene();

});