(function () {
  const windowURL = window.location.href;
  const lastCharURL = windowURL.substr(windowURL.length - 1);
  const hashURL = windowURL.split('#');
  const pageTitle = $('head').find('title');
  const $year = $('.year');
  let today = new Date();
  let year = today.getYear();

  if (year < 1900) {
    year = year + 1900;
  }

  $year.text(year);

  const takeTop = function takeMeTop() {
    $('.bottom-left-svg').click(function () {
      window.location.assign(`${hashURL[0]}`);
    });
  };
  const takeHome = function takeMeHome() {
    $('.bottom-right-svg').click(function () {
      window.location.assign('{{ site.url }}');
    });
  };
  const takeLicense = function takeMeLicense() {
    $('.bottom-right-svg').click(function () {
      window.location.assign('{{ site.url }}/license');
    });
  };
  const typeIndex = function typeInIndex(){
    $('.title').typed({
      strings: ['{{ site.author.name }}'],
      showCursor: false,
      typeSpeed: 100
    });
  };
  const typeWork = function typeInWork(){
    $('.title').typed({
      strings: ['<span>{</span><a href="{{ site.url }}/work">work</a><span>}<span>'],
      showCursor: false,
      typeSpeed: 100
    });
  };
  const typeTips = function typeInTips(){
    $('.title').typed({
      strings: ['<span>$(</span><a href="{{ site.url }}/tips">tips</a><span>)<span>'],
      showCursor: false,
      typeSpeed: 100
    });
  };
  const typeContact = function typeInContact(){
    $('.title').typed({
      strings: ['[contact]'],
      showCursor: false,
      typeSpeed: 100
    });
  };
  const typeLicense = function typeInLicense(){
    $('.title').typed({
      strings: ['#license'],
      showCursor: false,
      typeSpeed: 100
    });
  };
  const typeUninstall = function typeIn404(){
    $('.title').typed({
      strings: [`Uninstall`],
      showCursor: false,
      typeSpeed: 100
    });
  };
  const type404 = function typeIn404(){
    $('.title').typed({
      strings: [`woah there!^2000<br><span>are you lost?</span>`],
      showCursor: false,
      typeSpeed: 100
    });
  };
  const goHome = function goBackHome() {
    $('.title').typed({
      strings: [`go on now...^1000<br>go <a href="{{ site.url }}"><span class="green"><</span><span class="red">home</span><span class="green">></span></a>`],
      showCursor: false,
      typeSpeed: 100
    });
  };

  $(function () {
    if (lastCharURL === '/') {
      typeIndex();
    }
    if (windowURL.indexOf('work') > 0) {
      typeWork();
      takeLicense();
      takeTop();
    }
    if (windowURL.indexOf('tips') > 0) {
      typeTips();
      takeLicense();
      takeTop();
    }
    if (windowURL.indexOf('contact') > 0) {
      typeContact();
      takeLicense();
      takeTop();
    }
    if (windowURL.indexOf('license') > 0) {
      typeLicense();
      takeHome();
      takeTop();
    }
    if (windowURL.indexOf('uninstall') > 0) {
      typeUninstall();
      takeLicense();
      takeTop();
    }
    if (pageTitle.text().indexOf('404') > 0) {
      type404();
      $(document).ready(function cursor() {
        window.setTimeout(function hide() {
          $('.alert-svg').hide();
          $('.home-svg').show();
          $('.title').text('');
          $('.typed-cursor').removeClass('small-cursor');
          goHome();
        }, 15000);
      });
    }
  });
})();
