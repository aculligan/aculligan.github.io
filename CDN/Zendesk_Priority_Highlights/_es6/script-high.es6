const high = function highlightHigh() {
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $prevHighlight = $('.high-ticket-priority');
    $prevHighlight.removeClass('high-ticket-priority');
    let $priorityField = $('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao');
    $priorityField.each(function () {
      let $this = $(this);
      let priority = $this.text();
      if (priority == 'High') {
        $this.parent().addClass('high-ticket-priority');
      }
    });
  }
}

$(document).ready(function () {
  setTimeout(high, 1700);
});

$('*').click(function () {
  setTimeout(high, 1000);
});

$(window).focus(function () {
  setTimeout(high, 1500);
});
