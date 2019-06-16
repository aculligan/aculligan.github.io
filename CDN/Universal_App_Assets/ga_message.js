(function () {
	window.addEventListener('load', function()
	{
		if(window.ga && ga.create) 
		{
			console.log('Everything should work properly.');
		}
		else 
		{
			throw new Error("You are currently using an ad blocker. Ad blockers will cause things not to work properly in some cases. Please whitelist this website and reload the page. Don't worry, there are no ads here! :)");
			alert("You are currently using an ad blocker. Ad blockers will cause things not to work properly in some cases. Please whitelist this website and reload the page. Don't worry, there are no ads here! :)");
			document.body.innerHTML = '';
		}
	});
})();
