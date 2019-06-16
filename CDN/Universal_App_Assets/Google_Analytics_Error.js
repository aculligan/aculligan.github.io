(function () {
	window.addEventListener('load', function()
	{
		if(window.ga && ga.create) 
		{
			console.log('Everything should work properly.');
		}
		else 
		{
			console.log('You currently have an ad blocker installed. Ad blockers will cause this website not to work properly. Please whitelist this website and reload the page.'); 
			alert('You currently have an ad blocker installed. Ad blockers will cause this website not to work properly. Please whitelist this website and reload the page.');  
		}
	}, false);
})();
