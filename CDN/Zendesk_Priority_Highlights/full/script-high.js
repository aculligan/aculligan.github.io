const high = function highlightHigh() {
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
			if (priority == 'High') {
				$this.addClass('high-ticket-priority');
				$leading.addClass('high-ticket-priority');
				$trailing.addClass('high-ticket-priority');
			}
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
