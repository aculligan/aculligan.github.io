const low = function highlightLow() {
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $prevHighlight = $('.low-ticket-priority');
    $prevHighlight.removeClass('low-ticket-priority');
    let $priorityField = $('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao');
    $priorityField.each(function () {
      let $this = $(this);
      let priority = $this.text();
      if (priority == 'Low') {
        $this.parent().addClass('low-ticket-priority');
      }
    });
  }
}

$(document).ready(function () {
  setTimeout(low, 1700);
});

$('*').click(function () {
  setTimeout(low, 1000);
});

$(window).focus(function () {
  setTimeout(low, 1500);
});
