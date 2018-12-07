const removeLow = function removeOldLow () {
  let $prevHighlightLow = $('.low-ticket-priority');
  $prevHighlightLow.removeClass('low-ticket-priority');
};

const low = function highlightLow() {
  removeLow ();
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $headerItem = $('#table0 thead tr').children();
    let priorityItemIndex
    $headerItem.each(function (index) {
      let $this = $(this);
      let headerName = $this.text();
      if (headerName == 'Priority') {
        priorityItemIndex = index-2;
      }
    });

    let $ticketRows = $('#table2 tbody tr');
    $ticketRows.each(function () {
      let $this = $(this);
      let $priorityField = $this.find('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao').contents();
      let $priorityCell = $priorityField.eq(priorityItemIndex);
      let $priorityCellText = $priorityCell.text();
      if ($priorityCellText == 'Low') {
        $this.addClass('low-ticket-priority');
      }
    });
  }
};

$(document).ready(function () {
  setTimeout(low, 1700);
});

$('*').click(function () {
  setTimeout(low, 700);
});

$(window).focus(function () {
  setTimeout(low, 700);
});
