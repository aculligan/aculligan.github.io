'use strict';var high=function high(){if(0<window.location.href.indexOf('agent/filters')){var b=$('.filter_tickets tbody tr');b.each(function(){var c=$(this),d=$('td.priority'),e=$('.leading'),f=$('.trailing'),g=c.find(d).text(),h=c.find(e),i=c.find(f);'High'==g&&(c.addClass('high-ticket-priority'),h.addClass('high-ticket-priority'),i.addClass('high-ticket-priority'))})}};$(document).ready(function(){setTimeout(high,1700)}),$('*').click(function(){setTimeout(high,1300)}),$(window).focus(function(){setTimeout(high,1500)});
