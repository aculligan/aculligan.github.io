"use strict";var removeLowHighlight=function(){$(".zph-ltp").removeClass("zph-ltp zph-hltd")},applyLowHighlight=function(){var i=$("#main_panes > section.ember-view.main_panes.split_pane.flush_top.collapsible.filters > div.pane.right.section > div > div > div > div > div > table > thead > tr"),t=i.children(),e=void 0;t.each(function(i){"Priority"==$(this).text()&&(e=i)});var o=$("#main_panes > section > div.pane.right.section > div > div > div > div > div > div > table > tbody > tr"),n=void 0,l=void 0;o.each(function(){var i=$(this),t=i.children(),o=t.eq(e),h=o.text();n=h,t.length<4&&(l=0),"Low"==h&&$(this).addClass("zph-ltp zph-hltd")}),0!==l&&"Low"!==n&&"Normal"!==n&&"High"!==n&&"Urgent"!==n&&console.log("%cZendesk Priority Highlights: Could not find Priority Field","color: red; font-size: 20px")};$(document).ready(function(){window.location.href.indexOf("agent/filters")>0&&(removeLowHighlight(),setTimeout(applyLowHighlight,1700))}),$("*").click(function(){window.location.href.indexOf("agent/filters")>0&&(removeLowHighlight(),setTimeout(applyLowHighlight,1300))}),$(window).focus(function(){window.location.href.indexOf("agent/filters")>0&&(removeLowHighlight(),setTimeout(applyLowHighlight,1300))});
