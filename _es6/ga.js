/*(function () {
  let windowURL = window.location.href;
  let rootURL = '{{ site.url }}';
  let urlSplit = windowURL.split('/');
  let thisPage;

  if (windowURL === rootURL) {
    thisPage = 'index';
  } else {
    thisPage = _.last(urlSplit);
  }

  ga('create', '{{ site.ga }}', 'auto');
  ga('send', {
    hitType: 'pageview',
    page: location.pathname,
    title: thisPage
  });
})();*/


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', '{{ site.ga }}', 'auto');
ga('send', 'pageview');
