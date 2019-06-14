(function () {
  let $screenshots = $('.p-screenshots');
  let $img = $('.img-screenshot');

  $img.attr('id', function (i) {
    return 'screenshot-'+(i+1);
  });
  
  $img.attr('alt', function (i) {
    return 'Screenshot '+(i+1);
  });

  let $modal = $('.screenshot-modal');
  let $modalGlass = $('.modal-glass');
  let $modalZoom = $('.modal-zoom');
  let $modalMinus = $('.modal-minus');
  let $modalClose = $('.modal-close');
  let $modalX = $('.modal-x');
  let $modalImg = $('.modal-content');
  let $prev = $('.modal-prev');
  let $next = $('.modal-next');
  let $modalVal;
  let imgID;
  let first = $img.first().attr('id');
  let last = $img.last().attr('id');
  let beforeLast = $img.eq(-2).attr('id');
  let afterFirst = $img.eq(1).attr('id');

  $img.click(function () {
    let imgSrc = $(this).attr('src');
    imgID = $(this).attr('id');
    $modal.css('display', 'block');
    $modalImg.attr({
      src: imgSrc,
      value: imgID,
      alt: 'Alexander Culligan',
      title: 'Alexander Culligan'
    });
    if (imgID !== first && imgID !== last) {
      $prev.css('display', 'inline-block');
      $next.css({
        marginLeft: '50px',
        display: 'inline-block'
      });
    }
    if (imgID === first) {
      $prev.css('display', 'none');
      $next.css({
        marginLeft: '0',
        display: 'inline-block'
      });
    }
    if (imgID === last) {
      $next.hide();
      $prev.css({
        marginLeft: '0',
        display: 'inline-block'
      });
    }
  });

  $next.click(function () {
    $modalVal = $modalImg.attr('value');
    imgID = $(`#${$modalVal}`);
    let next = imgID.next();
    let nextID = next.attr('id');
    if ($modalVal !== first && $modalVal !== beforeLast) {
      $modalImg.attr({
        src: next.attr('src'),
        value: nextID
      });
      $prev.css('display', 'inline-block');
      $next.css({
        marginLeft: '50px',
        display: 'inline-block'
      });
    }
    if ($modalVal === first) {
      $modalImg.attr({
        src: next.attr('src'),
        value: nextID
      });
      $prev.css('display', 'inline-block');
      $next.css({
        marginLeft: '50px',
        display: 'inline-block'
      });
    }
    if ($modalVal === beforeLast) {
      $modalImg.attr({
        src: next.attr('src'),
        value: nextID
      });
      $next.hide();
      $prev.css({
        marginLeft: '0',
        display: 'inline-block'
      });
    }
  });

  $prev.click(function () {
    $modalVal = $modalImg.attr('value');
    imgID = $(`#${$modalVal}`);
    let prev = imgID.prev();
    let prevID = prev.attr('id');
    if ($modalVal !== last && $modalVal !== afterFirst) {
      $modalImg.attr({
        src: prev.attr('src'),
        value: prevID
      });
      $prev.css('display', 'inline-block');
      $next.css({
        marginLeft: '50px',
        display: 'inline-block'
      });
    }
    if ($modalVal === last) {
      $modalImg.attr({
        src: prev.attr('src'),
        value: prevID
      });
      $prev.css('display', 'inline-block');
      $next.css({
        marginLeft: '50px',
        display: 'inline-block'
      });
    }
    if ($modalVal === afterFirst) {
      $modalImg.attr({
        src: prev.attr('src'),
        value: prevID
      });
      $prev.hide();
      $next.css({
        marginLeft: '0',
        display: 'inline-block'
      });
    }
  });

  $modalZoom.click(function () {
    $modal.addClass('full-modal');
    $modalImg.addClass('full-image');
    $modalX.addClass('full-x');
    $modalZoom.addClass('full-zoom');
    $modalGlass.addClass('full-glass');
    $modalMinus.addClass('full-minus');
  });
  
  $modalMinus.click(function () {
    $modal.removeClass('full-modal');
    $modalImg.removeClass('full-image');
    $modalX.removeClass('full-x');
    $modalZoom.removeClass('full-zoom');
    $modalGlass.removeClass('full-glass');
    $modalMinus.removeClass('full-minus');
  });
  
  $modalClose.click(function () {
    $modal.removeClass('full-modal');
    $modalImg.removeClass('full-image');
    $modalX.removeClass('full-x');
    $modalZoom.removeClass('full-zoom');
    $modalGlass.removeClass('full-glass');
    $modalMinus.removeClass('full-minus');
    $modal.hide();
    $modalImg.attr('value', '');
    $prev.hide();
    $next.hide();
  });

  $(document).mouseup(function (e) {
    if ($modal.is(e.target) && !$modalImg.is(e.target)) {
      $modal.removeClass('full-modal');
      $modalImg.removeClass('full-image');
      $modalX.removeClass('full-x');
      $modalZoom.removeClass('full-zoom');
      $modalGlass.removeClass('full-glass');
      $modalMinus.removeClass('full-minus');
      $modal.hide();
      $modalImg.attr('value', '');
      $prev.hide();
      $next.hide();
    }
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $modal.removeClass('full-modal');
      $modalImg.removeClass('full-image');
      $modalX.removeClass('full-x');
      $modalZoom.removeClass('full-zoom');
      $modalGlass.removeClass('full-glass');
      $modalMinus.removeClass('full-minus');
      $modal.hide();
      $modalImg.attr('value', '');
      $prev.hide();
      $next.hide();
    }
  });
})();
