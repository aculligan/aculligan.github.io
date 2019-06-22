(function () {
  if (window.location.href.indexOf('agent/filters') > 0) {
    const removeNormalHighlight = function removeOldNormal () {
      let $prevHighlightNormal = $('.zph-ntp');
      $prevHighlightNormal.removeClass('zph-ntp zph-hltd');
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
            priorityItemIndex = index;
            console.log(priorityItemIndex);
          }
        });

        let $ticketRows = $('#main_panes > section > div.pane.right.section > div > div > div > div > div > div > table > tbody > tr');
        let fieldFound

        $ticketRows.each(function () {
          let $thisRow = $(this);
          let $thisRowChildren = $thisRow.children();
          let $priorityCell = $thisRowChildren.eq(priorityItemIndex);
          console.log($priorityCell);
          let $priorityCellText = $priorityCell.text();
          console.log($priorityCellText);

          if ($priorityCellText == 'Normal') {
            $(this).addClass('zph-ntp zph-hltd');
          }
        });

        /* if (fieldFound.length <= 0) {
          console.log('Zendesk Priority Highlights: Could not find Priority Field');
        } */
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
  }
});
