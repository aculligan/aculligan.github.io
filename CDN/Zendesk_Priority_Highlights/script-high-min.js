const high = function highlightHigh() {
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $priorityRow = $('#table2 tbody tr');
    $priorityRow.each(function () {
      let $this = $(this);
      let $priorityField = $('LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao.LRat');
      $priorityField.each(function () {
      	console.log('priorityField');
      });
    });
  }
}

$(document).ready(function () {
  setTimeout(high, 1700);
});

$('*').click(function () {
  setTimeout(high, 1300);
});

$(window).focus(function () {
  setTimeout(high, 1500);
});
