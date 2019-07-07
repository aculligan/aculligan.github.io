---
---

(function () {
	window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
	{% if page.require contains 'uninstall' %}
	ga('create', 'UA-87536814-1', 'auto');
	{% else %}
	ga('create', '{{ site.ga }}', 'auto');
	{% endif %}
	ga('send', 'pageview');
})();
