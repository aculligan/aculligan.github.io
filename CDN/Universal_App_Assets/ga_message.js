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
			document.body.innerHTML = '';
			alert('You are currently using an ad blocker. Ad blockers will cause things not to work properly in some cases. Please whitelist this website and reload the page. Be happy, there are no ads here! :)');
			throw new Error('You are currently using an ad blocker. Ad blockers will cause things not to work properly in some cases. Please whitelist this website and reload the page. Be happy, there are no ads here! :)');
		}
	});
})();
