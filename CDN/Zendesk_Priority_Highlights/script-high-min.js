const removeHigh = function removeOldHigh () {
  let $prevHighlightHigh = $('.high-ticket-priority');
  $prevHighlightHigh.removeClass('high-ticket-priority priority-highlight');
};

const high = function highlightHigh() {
  console.log(window.location.href);
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $headerItem = $('#main_panes > section.ember-view.main_panes.split_pane.flush_top.collapsible.filters > div.pane.right.section > div > div > div > div > div > table > thead > tr').children();
    let priorityItemIndex
    $headerItem.each(function (index) {
      let $this = $(this);
      let headerName = $this.text();
      if (headerName == 'Priority') {
        priorityItemIndex = index-2;
      }
    });

    let $ticketRows = $('#main_panes > section > div.pane.right.section > div > div > div > div > div > div > table > tbody > tr');
    $ticketRows.each(function () {
      let $this = $(this);
      let $priorityField = $this.find('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao').contents();
      let $priorityCell = $priorityField.eq(priorityItemIndex);
      let $priorityCellText = $priorityCell.text();
      if ($priorityCellText == 'High') {
        $this.addClass('high-ticket-priority priority-highlight');
      }
    });
  }
};

$(document).ready(function () {
  removeHigh ();
  setTimeout(high, 1700);
});

$('*').click(function () {
  removeHigh ();
  setTimeout(high, 700);
});

$(window).focus(function () {
  removeHigh ();
  setTimeout(high, 700);
});
