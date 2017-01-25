const normal = function highlightNormal() {
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
			if (priority == 'Normal') {
				$this.addClass('normal-ticket-priority');
				$leading.addClass('normal-ticket-priority');
				$trailing.addClass('normal-ticket-priority');
			}
		});
	}
}

$(document).ready(function () {
	setTimeout(normal, 1700);
});

$('*').click(function () {
	setTimeout(normal, 1300);
});

$(window).focus(function () {
	setTimeout(normal, 1500);
});
