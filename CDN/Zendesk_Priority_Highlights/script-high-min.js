const removeHighHighlight = function () {
  let $prevHighlightHigh = $('.zph-htp');
  $prevHighlightHigh.removeClass('zph-htp zph-hltd');
};

const applyHighHighlight = function () {
  let $tableHeadRow = $('#main_panes > section.ember-view.main_panes.split_pane.flush_top.collapsible.filters > div.pane.right.section > div > div > div > div > div > table > thead > tr');
  let $tableHeadRowChildren = $tableHeadRow.children();
  let priorityItemIndex

  $tableHeadRowChildren.each(function (index) {
    let $thisRowChild = $(this);
    let childHeaderName = $thisRowChild.text();
    if (childHeaderName == 'Priority') {
      priorityItemIndex = index;
      //console.log(priorityItemIndex);
    }
  });

  let $ticketRows = $('#main_panes > section > div.pane.right.section > div > div > div > div > div > div > table > tbody > tr');
  let fieldFound

  $ticketRows.each(function () {
    let $thisRow = $(this);
    let $thisRowChildren = $thisRow.children();
    let $priorityCell = $thisRowChildren.eq(priorityItemIndex);
    let $priorityCellText = $priorityCell.text();
    fieldFound = $priorityCellText;
    //console.log($priorityCellText);

    if ($priorityCellText == 'High') {
      $(this).addClass('zph-htp zph-hltd');
    }
  });

  //console.log(fieldFound);
  if (fieldFound !== 'Low' && fieldFound !== 'Normal' && fieldFound !== 'High' && fieldFound !== 'Urgent') {
    console.error('Zendesk Priority Highlights: Could not find Priority Field');
  }
};

$(document).ready(function () {
  if (window.location.href.indexOf('agent/filters') > 0) {
    removeHighHighlight ();
    setTimeout(applyHighHighlight, 1700);
  }
});

$('*').click(function () {
  if (window.location.href.indexOf('agent/filters') > 0) {
    removeHighHighlight ();
    setTimeout(applyHighHighlight, 1300);
  }
});

$(window).focus(function () {
  if (window.location.href.indexOf('agent/filters') > 0) {
    removeHighHighlight ();
    setTimeout(applyHighHighlight, 1300);
  }
});
