$(document).ready(function() {
	ga('create', 'UA-87694402-1', 'auto');
  ga('set', 'checkProtocolTask', function(){});
  ga('require', 'displayfeatures');
  ga('send', {
    hitType: 'event',
    eventCategory: 'Usage',
    eventAction: 'Use',
    eventLabel: 'Active User'
  });
  var client = ZAFClient.init();
  client.invoke('resize', { height: '340px' }).then(function() {
    $('.mandatory').keyup(function() {
      var empty = false;
      $('.mandatory').each(function() {
        if ($(this).val() < 1) {
          empty = true;
        }
      });
      if (empty) {
        $('#submit_change').attr('disabled', 'disabled');
      } else {
        $('#submit_change').removeAttr('disabled');
      }
    });
    client.get('currentUser').then(function(data) {
      var currentUserID = data.currentUser.id;
      var submitButton = $('#submit_change');
      submitButton.click(function() {
        var ticketRequester = $('#txt-0').val();
        var ticketSubject = $('#txt-1').val();
        var ticketDescription = $('#txtarea-0').val();
        var converter = new showdown.Converter();
        converter.setOption('noHeaderId', 'true');
        converter.setOption('omitExtraWLInCodeBlocks', 'true');
        converter.setOption('simplifiedAutoLink', 'true');
        converter.setOption('literalMidWordUnderscores', 'true');
        converter.setOption('strikethrough', 'true');
        var ticketHTML = converter.makeHtml(ticketDescription);
        var stringedComment = JSON.stringify(ticketHTML);
        var createTicket = {
          url: '/api/v2/tickets.json',
          type: 'POST',
          contentType: 'application/json',
          data: '{"ticket": {"submitter_id": "' + currentUserID + '", "requester": "' + ticketRequester + '", "subject": "' + ticketSubject + '", "comment": {"html_body": ' + stringedComment + ', "public": false}}'
        };
        client.request(createTicket).then(function(data) {
          var ticketID = data.ticket.id;
          var ticketURL = data.ticket.url;
          ga('create', 'UA-87694402-1', 'auto');
				  ga('set', 'checkProtocolTask', function(){});
				  ga('require', 'displayfeatures');
				  ga('send', {
				    hitType: 'event',
				    eventCategory: 'Create',
				    eventAction: 'Create Ticket',
				    eventLabel: 'Create Ticket'
				  });
          client.invoke('resize', { height: '180px' });
          $('div').html('<div class="centered"><label class="centered-label">Ticket <a id="ticket-id" href="">' + ticketID + '</a> Created!</label><p class="centered"> Remember to open the ticket and update the Priority, Assignee and other ticket fields.</p></div><div id="ticket-button"><input class="submit-btn submit-btn--primary" type="button" id="ticket_change" value="Open Ticket"></div>');
          $('#ticket-button').click(function() {
            client.invoke('routeTo', 'ticket', ticketID);
            window.location.reload(true);
	          ga('create', 'UA-87694402-1', 'auto');
					  ga('set', 'checkProtocolTask', function(){});
					  ga('require', 'displayfeatures');
					  ga('send', {
					    hitType: 'event',
					    eventCategory: 'Visit',
					    eventAction: 'Visit Ticket',
					    eventLabel: 'Visit Ticket'
					  });
          });
          $('#ticket-id').click(function() {
            client.invoke('routeTo', 'ticket', ticketID);
            window.location.reload(true);
            ga('create', 'UA-87694402-1', 'auto');
					  ga('set', 'checkProtocolTask', function(){});
					  ga('require', 'displayfeatures');
					  ga('send', {
					    hitType: 'event',
					    eventCategory: 'Visit',
					    eventAction: 'Visit Ticket',
					    eventLabel: 'Visit Ticket'
					  });
          });
        });
      });
    });
  });
});
