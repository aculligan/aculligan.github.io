(function () {
  let $section = $('h3');
  let $navContent = $('.nav-content ul');

  $section.attr('id', function (i) {
    return 'section-'+(i+1);
  });

  $section.each(function () {
    let $sectionName = $(this).text().slice(0, -1);
    let $sectionID = $(this).attr('id');
    $navContent.append(`<li class="nav-li"><a href="#${$sectionID}">${$sectionName}</a></li>`)
  });
})();
