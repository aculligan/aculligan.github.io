const removeNormalHighlight = function removeOldNormal () {
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $prevHighlightNormal = $('.zph-ntp');
    $prevHighlightNormal.removeClass('zph-ntp zph-hltd');
  }
};

const applyNormalHighlight = function highlightNormal () {
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $tableHeadRow = $('#main_panes > section.ember-view.main_panes.split_pane.flush_top.collapsible.filters > div.pane.right.section > div > div > div > div > div > table > thead > tr');
    let $tableHeadRowChildren = $tableHeadRow.children();
    let priorityItemIndex

    $tableHeadRowChildren.each(function (index) {
      let $thisRowChild = $(this);
      let childHeaderName = $thisRowChild.text();
      if (childHeaderName == 'Priority') {
        priorityItemIndex = index-2;
      }
    });

    let $ticketRows = $('#main_panes > section > div.pane.right.section > div > div > div > div > div > div > table > tbody > tr');

    $ticketRows.each(function () {
      let $thisRow = $(this);
      let fieldOne = $thisRow.find('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRy.LRz.LRbl.LRbm.LRbn.LRav.LRaw.LRap').contents();
      let fieldTwo = $thisRow.find('td.LRbi.LRbm.LRbn.LRbo.LRbp.LRbq.LRbr.LRbs.LRbt.LRbu.LRz.LRbv.LRco.LRcm.LRcn.LRy').contents();
      let fieldThree = $thisRow.find('td.LRay.LRbc.LRbd.LRbe.LRbf.LRbg.LRbh.LRbi.LRbj.LRbk.LRz.LRbl.LRce.LRcc.LRcd.LRy').contents();
      let fieldFour = $thisRow.find('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao').contents();
      let $priorityField

      if (fieldOne.length > 0) {
        $priorityField = fieldOne;
        console.log('it was fieldOne');
      } else if (fieldTwo.length > 0) {
        $priorityField = fieldTwo;
        console.log('it was fieldTwo');
      } else if (fieldThree.length > 0) {
        $priorityField = fieldThree;
        console.log('it was fieldThree');
      } else if (fieldFour.length > 0) {
        $priorityField = fieldFour;
        console.log('it was fieldFour');
      } else {
        console.error('Could not find "Priority Field"');
      }

      let $priorityCell = $priorityField.eq(priorityItemIndex);
      let $priorityCellText = $priorityCell.text();

      if ($priorityCellText == 'Normal') {
        $(this).addClass('zph-ntp zph-hltd');
      }
    });
  }
};

$(document).ready(function () {
  removeNormalHighlight ();
  setTimeout(applyNormalHighlight, 1700);
});

$('*').click(function () {
  removeNormalHighlight ();
  setTimeout(applyNormalHighlight, 1300);
});

$(window).focus(function () {
  removeNormalHighlight ();
  setTimeout(applyNormalHighlight, 1300);
});
