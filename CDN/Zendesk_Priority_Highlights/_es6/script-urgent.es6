const removeUrgent = function removeOldUrgent () {
  let $prevHighlightUrgent = $('.urgent-ticket-priority');
  $prevHighlightUrgent.removeClass('urgent-ticket-priority priority-highlight');
};

const urgent = function highlightUrgent() {
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
      if ($priorityCellText == 'Urgent') {
        $this.addClass('urgent-ticket-priority priority-highlight');
      }
    });
  }
};

$(document).ready(function () {
  removeUrgent ();
  setTimeout(urgent, 1700);
});

$('*').click(function () {
  removeUrgent ();
  setTimeout(urgent, 700);
});

$(window).focus(function () {
  removeUrgent ();
  setTimeout(urgent, 700);
});
