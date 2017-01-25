const windowURL = window.location.href;

(function () {
  if (windowURL.match('.html$')) {
    const urlLessFive = windowURL.slice(0, -5);;
    window.location.replace(urlLessFive);
  }
  if ((windowURL.indexOf('#') > 0)) {
    const urlNoPound = windowURL.split('#')[0];
    window.location.replace(urlNoPound);
  }
  if ((windowURL.indexOf('#') < 1) && (windowURL.indexOf('.html') < 1)) {
    const head = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
                  <link rel="stylesheet" href="https://aculligan.github.io/css/main.css">
                  <link rel="stylesheet" href="https://aculligan.github.io/css/responsive.css">
                  <link rel="stylesheet" href="https://aculligan.github.io/css/modal-min.css">
                  <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro" rel="stylesheet">
                  <script type="text/javascript" src="https://aculligan.github.io/CDN/Universal_App_Assets/Google_Analytics.js"></script>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <link rel="shortcut icon" type="image/png" href="https://aculligan.github.io/img/code-icon.png">`;
    const rootURL = 'https://aculligan.github.io/';
    const urlSplit = windowURL.split('/');
    let thisPage;

    $('head').append(head);
    if (windowURL === rootURL) {
      thisPage = 'index';
    } else {
      thisPage = _.last(urlSplit);
    }
    $('.header-bar').load('https://aculligan.github.io/html/head-footer/header-bar.html');
    $('footer').load('https://aculligan.github.io/html/head-footer/footer.html');
    if (windowURL.indexOf('/apps/') > 0) {
      $('.content').load(`https://aculligan.github.io/html/apps/${thisPage}-content.html`);
    }
    if (windowURL.indexOf('/extensions/') > 0) {
      $('.content').load(`https://aculligan.github.io/html/extensions/${thisPage}-content.html`);
    }
    if (windowURL.indexOf('/tips/') > 0) {
      $('.content').load(`https://aculligan.github.io/html/tips/${thisPage}-content.html`);
    }
    if (windowURL.indexOf('/apps/') < 1 && windowURL.indexOf('/extensions/') < 1 && windowURL.indexOf('/tips/') < 1) {
      $('.content').load(`https://aculligan.github.io/html/${thisPage}-content.html`);
    }
    ga('create', 'UA-88468730-1', 'auto');
    ga('send', {
      hitType: 'pageview',
      page: location.pathname,
      title: thisPage
    });
  }
})();
