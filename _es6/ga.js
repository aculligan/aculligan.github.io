(function () {
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
})();
