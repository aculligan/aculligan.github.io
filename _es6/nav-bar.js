(function () {
  const pageColor = $('.top-div').css('background-color');
  const menuColor = '#f8f8f8';
  const borderColor = '#dddddd';
  const outerHeight = $('.top-div').outerHeight();
  let moveScreen = function offsetAnchor() {
    if(location.hash.length > 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    }
  };
  $('.bottom-svg').css('background-color', pageColor);
  $('.nav-li').css('border-left', `2px solid ${pageColor}`);
  $('.nav-content a').css('color', pageColor);
  let $menuItem = $('.nav-li');
  $menuItem.last().css('border-right', `2px solid ${pageColor}`);
  $menuItem.hover(function () {
    $(this).find('a').css('color', menuColor);
    $(this).css('background-color', pageColor);
  }, function() {
    $(this).find('a').css('color', pageColor);
    $(this).css('background-color', menuColor);
  });
  $('.app-list-item').hover(function() {
    $(this).css('border-color', pageColor);
  }, function() {
    $(this).css('border-color', borderColor);
  });
  $('.img-screenshot').hover(function() {
    $(this).css('border-color', pageColor);
  }, function() {
    $(this).css('border-color', borderColor);
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() > outerHeight && $('.top-div').is(':visible')) {
      $('.menu-page').addClass('top-menu');
      $('.menu-page span').addClass('white');
      $('.slash').addClass('white');
      $('.top-menu').css('background-color', pageColor);
    } else {
      $('.menu-page').removeClass('top-menu');
      $('.menu-page span').removeClass('white');
      $('.slash').removeClass('white');
      $('.menu-page').css('background-color', menuColor);
    }
  });
  window.addEventListener('hashchange', moveScreen);
})();
