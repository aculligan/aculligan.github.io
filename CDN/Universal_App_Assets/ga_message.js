(function () {
	window.addEventListener('load', function()
	{
		if(window.ga && ga.create) 
		{
			console.log('Everything should work properly.');
		}
		else 
		{
			alert('You are currently using an ad blocker. Ad blockers will cause things not to work properly in some cases. Please whitelist this website and reload the page.');
			throw new Error("You are currently using an ad blocker. Ad blockers will cause things not to work properly in some cases. Please whitelist this website and reload the page.");
			$('.right-div').remove();
			$('script').remove();
		}
	}, false);
})();
