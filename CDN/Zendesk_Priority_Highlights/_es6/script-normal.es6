const normal = function highlightNormal() {
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $prevHighlight = $('.normal-ticket-priority');
    $prevHighlight.removeClass('normal-ticket-priority');
    let $priorityField = $('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao');
    $priorityField.each(function () {
      let $this = $(this);
      let priority = $this.text();
      if (priority == 'Normal') {
        $this.parent().addClass('normal-ticket-priority');
      }
    });
  }
}

$(document).ready(function () {
  setTimeout(normal, 1700);
});

$('*').click(function () {
  setTimeout(normal, 1000);
});

$(window).focus(function () {
  setTimeout(normal, 1500);
});
