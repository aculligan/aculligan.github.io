const removeHigh = function removeOldHigh () {
  let $prevHighlightHigh = $('.high-ticket-priority');
  $prevHighlightHigh.removeClass('high-ticket-priority');
};

const high = function highlightHigh() {
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
      let fieldOne = $this.find('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao').contents();
      let fieldTwo = $this.find('td.LRbi.LRbm.LRbn.LRbo.LRbp.LRbq.LRbr.LRbs.LRbt.LRbu.LRz.LRbv.LRco.LRcm.LRcn.LRy').contents();
      let fieldThree = $this.find('td.LRay.LRbc.LRbd.LRbe.LRbf.LRbg.LRbh.LRbi.LRbj.LRbk.LRz.LRbl.LRce.LRcc.LRcd.LRy').contents();

      let $priorityField
      if (fieldOne.length > 0) {
      	$priorityField = fieldOne;
      } else if (fieldTwo.length > 0) {
      	$priorityField = fieldTwo;
      } else {
      	$priorityField = fieldThree;
      }

      let $priorityCell = $priorityField.eq(priorityItemIndex);
      let $priorityCellText = $priorityCell.text();
      if ($priorityCellText == 'High') {
        $this.addClass('high-ticket-priority');
      }
    });
  }
};

$(document).ready(function () {
  removeHigh ();
  setTimeout(high, 1700);
});

$('body').click(function () {
  removeHigh ();
  setTimeout(high, 700);
});

$(window).focus(function () {
  removeHigh ();
  setTimeout(high, 700);
});
