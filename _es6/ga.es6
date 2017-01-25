(function () {
  let windowURL = window.location.href;
  let rootURL = 'https://aculligan.github.io/';
  let urlSplit = windowURL.split('/');
  let thisPage;

  if (windowURL === rootURL) {
    thisPage = 'index';
  } else {
    thisPage = _.last(urlSplit);
  }

  ga('create', 'UA-88468730-1', 'auto');
  ga('send', {
    hitType: 'pageview',
    page: location.pathname,
    title: thisPage
  });
})();
