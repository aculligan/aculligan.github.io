const low = function highlightLow() {
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
			if (priority == 'Low') {
				$this.addClass('low-ticket-priority');
				$leading.addClass('low-ticket-priority');
				$trailing.addClass('low-ticket-priority');
			}
		});
	}
}

$(document).ready(function () {
	setTimeout(low, 1700);
});

$('*').click(function () {
	setTimeout(low, 1300);
});

$(window).focus(function () {
	setTimeout(low, 1500);
});
