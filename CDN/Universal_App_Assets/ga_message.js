(function () {
	window.addEventListener('load', function()
	{
		if(window.ga && ga.create) 
		{
			console.log('Everything should work properly.');
		}
		else 
		{
			var pageLinks = $('a');
			$.each(pageLinks, function (href) {
				$(this).removeAttr('href')
			});
			alert('You are currently using an ad blocker. Ad blockers will cause this website not to work properly in some cases. Please whitelist this website and reload the page. Do not worry, there are no ads here! :)');
			throw new Error('You are currently using an ad blocker. Ad blockers will cause things not to work properly in some cases. Please whitelist this website and reload the page. Do not worry, there are no ads here! :)');
		}
	});
})();
