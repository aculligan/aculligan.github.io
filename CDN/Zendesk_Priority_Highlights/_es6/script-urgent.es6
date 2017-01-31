const urgent = function highlightUrgent() {
  if (window.location.href.indexOf('agent/filters') > 0) {
    let $priorityRow = $('.filter_tickets tbody tr');
    $priorityRow.each(function () {
      let $this = $(this);
      let $priorityField = $('td.priority');
      let $leadingField = $('.leading');
      let $trailingField = $('.trailing');
      let priority = $this.find($priorityField).text();
      let $leading = $this.find($leadingField);
      let $trailing = $this.find($trailingField);
      if (priority == 'Urgent') {
        $this.addClass('urgent-ticket-priority');
        $leading.addClass('urgent-ticket-priority');
        $trailing.addClass('urgent-ticket-priority');
      }
    });
  }
}

$(document).ready(function () {
  setTimeout(urgent, 1700);
});

$('*').click(function () {
  setTimeout(urgent, 1300);
});

$(window).focus(function () {
  setTimeout(urgent, 1500);
});
