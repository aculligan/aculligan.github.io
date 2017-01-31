const bubbles = function chatBubbles() {
  let lightenColor;
  if (window.location.href.indexOf('agent/tickets') > 0) {
    const navBarColor = $('nav#main_navigation').css('background-color');
    const navBarRGB = navBarColor.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    const navBarHex = ('0' + parseInt(navBarRGB[1],10).toString(16)).slice(-2) + ('0' + parseInt(navBarRGB[2],10).toString(16)).slice(-2) + ('0' + parseInt(navBarRGB[3],10).toString(16)).slice(-2);
    lightenColor = (col, amt) => {
      let num = parseInt(col,16);
      let r = (num >> 16) + amt;
      if (r > 255) r = 255;
      else if  (r < 0) r = 0;
      let b = ((num >> 8) & 0x00FF) + amt;
      if (b > 255) b = 255;
      else if  (b < 0) b = 0;
      let g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255;
      else if (g < 0) g = 0;
      return (g | (b << 8) | (r << 16)).toString(16);
    };
    let lightHex = lightenColor(navBarHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    lightHex = lightenColor(lightHex, 20);
    const $head = $('head');
    let $headStyle = $head.find('.line-color').length;
    if ($headStyle < 1) {
      $head.append(
        $(`<style class="line-color">
          p.agent-line {
            background-color: #${lightHex} !important;
            border-color: #${navBarHex} !important;
          }
          .arrow-agent:before {
            border-bottom-color: ${navBarColor} !important;
          }
          .arrow-agent:after {
            border-bottom-color: #${lightHex} !important;
          }
          </style>`)
      );
    }
    let chatSection = $('.event-container').find('.ember-view.event.chat div.content:contains(") ***")');
    chatSection.each(function () {
      let $this = $(this);
      let chatStart = $this.find('p')[0];
      let $chatText = $this.find('p')[1];
      let $chatTextHTML = $($chatText).html();
      $(chatStart).addClass('system-line');
      $($chatText).replaceWith(`<div class="chat-comment"><p class="chat-line">${$chatTextHTML}</p></div>`);
    });
    let $chatComment = $('.chat-comment');
    $chatComment.each(function () {
      let $this = $(this);
      let $thisHTML = $this.html();
      $this.html($thisHTML.replace(/<br>\\*/g,'</p><p class="chat-line">'));
    });
    let $chatLine = $('.chat-line');
    $chatLine.each(function () {
      let $this = $(this);
      let $thisHTML = $this.html();
      let $thisText = $this.text();
      let $nextFour = $this.nextAll().slice(0,4);
      let $nextFourHTML = $nextFour.html();
      let $parent = $this.parent();
      $parent = $parent.parent();
      $parent = $parent.parent();
      $parent = $parent.parent();
      $parent = $parent.parent();
      $parent = $parent.parent();
      $parent = $parent.parent();
      let author = $parent.find('div.header.clearfix div.actor span.name a').text();
      if ($thisText.indexOf(') ***') > 0) {
        $this.addClass('system-line');
      } else if ($thisText.indexOf('Agent uploaded: ') > 0) {
        $this.replaceWith(`<p class="chat-line system-line">${$thisHTML}<br>${$nextFourHTML}</p>`);
        $nextFour.css('display', 'none');
      } else if ($thisText.indexOf('Visitor uploaded: ') > 0) {
        $this.replaceWith(`<p class="chat-line system-line">${$thisHTML}<br>${$nextFourHTML}</p>`);
        $nextFour.css('display', 'none');
      } else if ($thisHTML.indexOf(`) ${author}`) > 0)  {
        $this.addClass('user-line');
        let span = $this.find('span');
        if (span.length < 1) {
          $this.append($('<span class="arrow-chat arrow-user"> </span>'));
        }
      } else if ($this.attr('class') != 'system-line') {
        $this.addClass('agent-line');
        let span = $this.find('span');
        if (span.length < 1) {
          $this.append($('<span class="arrow-chat arrow-agent"> </span>'));
        }
      }
    });
  }
}

$(document).ready(function () {
  setTimeout(bubbles, 2000);
});

$('*').click(function () {
  setTimeout(bubbles, 1300);
});
