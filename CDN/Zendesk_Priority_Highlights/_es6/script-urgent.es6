const urgent = function highlightUrgent() {
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $prevHighlight = $('.urgent-ticket-priority');
    $prevHighlight.removeClass('urgent-ticket-priority');
    let $priorityField = $('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao');
    $priorityField.each(function () {
      let $this = $(this);
      let priority = $this.text();
      if (priority == 'Urgent') {
        $this.parent().addClass('urgent-ticket-priority');
      }
    });
  }
}

$(document).ready(function () {
  setTimeout(urgent, 1700);
});

$('*').click(function () {
  setTimeout(urgent, 1000);
});

$(window).focus(function () {
  setTimeout(urgent, 1500);
});
