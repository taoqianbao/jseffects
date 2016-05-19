/* @update: 2016-3-30 13:18:18 */
define("project/mouseScroll", function(require, t, i) {
	i.exports = function() {
		function t(t) {
			$(".scroll-div").animate({
				marginTop: -400 * t
			}, 500)
		}

		function i(t, i) {
			var e = Raphael(t, 108, 108);
			e.customAttributes.arc = function(t, i, e, c, n) {
				var r, s = 360 / c * e,
					a = (90 - s) * Math.PI / 180,
					l = t + n * Math.cos(a),
					o = i - n * Math.sin(a);
				return r = c == e ? [
					["M", t, i - n],
					["A", n, n, 0, 1, 1, t - .01, i - n]
				] : [
					["M", t, i - n],
					["A", n, n, 0, +(s > 180), 1, l, o]
				], {
					path: r
				}
			};
			var c = (e.path().attr({
						stroke: "#c8c9ca",
						"stroke-width": 2,
						arc: [54, 54, 100, 100, 47]
					}),
					e.path().attr({
						stroke: "#35e9cb",
						"stroke-width": 4,
						arc: [54, 54, .01, 100, 47]
					})),
				n = i;
			n >= 80 && (c = e.path().attr({
						stroke: "#fd30ae",
						"stroke-width": 4,
						arc: [54, 54, .01, 100, 47]
					}),
					$(t).parent().find(".circle-num").css({
						color: "#fd30ae"
					})),
				n >= 100 && (n = 100),
				n > 0 ? c.animate({
					arc: [54, 54, n, 100, 47]
				}, 500, "ease-in-out") : c.hide()
		}
		var e = (document.getElementById("scrollBody"), 0);
		$(".scroll-list li").click(function() {
				return $(".scroll-list li").removeClass("cur"),
					$(this).addClass("cur"),
					$(".scroll-block").animate({
						top: 39 + 44 * $(this).index()
					}, 500),
					t($(this).index()),
					e = $(this).index()
			}),
			$(".scroll-div ul:eq(0) li").each(function() {
				var t = $(this).find(".circle-svg:eq(0)").get(0),
					e = parseInt($(this).find(".num").html());
				i(t, e)
			}),
			$(".scroll-list li").one("click", function() {
				var t = $(this).index();
				t > 0 && $(".scroll-div ul").eq(t).find("li").each(function() {
					var t = $(this).find(".circle-svg:eq(0)").get(0),
						e = parseInt($(this).find(".num").html());
					setTimeout(function() {
						i(t, e)
					}, 500)
				})
			})
	}
});