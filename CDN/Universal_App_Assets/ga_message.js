(function () {
	window.addEventListener("load", function()
	{
		if(window.ga && ga.create)
		{
			console.log("Everything should work properly.");
		}
		else
		{
			var pageLinks = $("a");
			$.each(pageLinks, function (href) {
				$(this).removeAttr("href")
			});
			setTimeout(function () {
				var leftDiv = $(".left-div");
				leftDiv.text("You are currently using an ad blocker. Ad blockers will cause the site not to work properly. Please whitelist this domain and reload the page. Don't worry, there are no ads here! :)").css({"color": "red","font-size": "200%", "font-weight": "bold", "text-align":"center","background-color":"#FFCC00", "padding-top": "200px", "width": "100%", "z-index": "10000000"});
			}, 15000);
			throw new Error("You are currently using an ad blocker. Ad blockers will cause the site not to work properly. Please whitelist this domain and reload the page. Don't worry, there are no ads here! :)");
		}
	});
})();
