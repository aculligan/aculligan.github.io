(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

const sendAnalytics = function sendUsageAnalytics() {
  if (window.location.href.indexOf('agent/filters') > 0) {
    ga('create', 'UA-87536814-1', 'auto');
    ga('set', 'checkProtocolTask', function (){});
    ga('require', 'displayfeatures');
    ga('set', 'page', '/filters');
    ga('send', 'pageview', location.pathname);
    ga('send', {
      hitType: 'event',
      eventCategory: 'Usage',
      eventAction: 'Use',
      eventLabel: 'App Loaded'
    });
  }
}

$(document).ready(function () {
  setTimeout(sendAnalytics, 1700);
});

$('*').click(function () {
  setTimeout(sendAnalytics, 700);
});

$(window).focus(function () {
  setTimeout(sendAnalytics, 700);
});
