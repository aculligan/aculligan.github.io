const remove = function removeOld () {
  let $prevHighlight = $('.normal-ticket-priority');
  $prevHighlight.removeClass('normal-ticket-priority');
};

const normal = function highlightNormal() {
  remove ();
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
      if ($priorityCellText == 'Normal') {
        $this.addClass('normal-ticket-priority');
      }
    });
  }
};

$(document).ready(function () {
  setTimeout(normal, 1700);
});

$('*').click(function () {
  setTimeout(normal, 700);
});

$(window).focus(function () {
  setTimeout(normal, 700);
});
