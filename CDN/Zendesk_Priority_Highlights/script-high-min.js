const high = function highlightHigh() {
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $priorityField = $('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao');
    $priorityField.each(function () {
      let $this = $(this);
      let priority = $this.text();
      if (priority == 'High') {
        $this.parent().addClass('high-ticket-priority');
      }
    });
  }
};

const remove = function removeOld () {
  let $prevHighlight = $('.high-ticket-priority');
  $prevHighlight.removeClass('high-ticket-priority');
};

$(document).ready(function () {
  remove();
  setTimeout(high, 1700);
});

$('*').click(function () {
  remove();
  setTimeout(high, 1000);
});

$(window).focus(function () {
  remove ();
  setTimeout(high, 1500);
});
