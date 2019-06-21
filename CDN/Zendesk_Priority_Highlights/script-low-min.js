'use strict';
var removeLow = function() {
        if (0 < window.location.href.indexOf('agent/filters')) {
            var b = $('.low-ticket-priority');
            b.removeClass('low-ticket-priority')
        }
    },
    low = function() {
        if (0 < window.location.href.indexOf('agent/filters')) {
            var b = $('#main_panes > section.ember-view.main_panes.split_pane.flush_top.collapsible.filters > div.pane.right.section > div > div > div > div > div > table > thead > tr').children(),
                c;
            b.each(function(e) {
                var f = $(this),
                    g = f.text();
                'Priority' == g && (c = e - 2)
            });
            var d = $('#main_panes > section > div.pane.right.section > div > div > div > div > div > div > table > tbody > tr');
            d.each(function() {
                var e = $(this),
                    f = e.find('td.LRm.LRp.LRq.LRr.LRs.LRt.LRu.LRv.LRw.LRx.LRy.LRz.LRaw.LRau.LRav.LRao').contents(),
                    g = e.find('td.LRbi.LRbm.LRbn.LRbo.LRbp.LRbq.LRbr.LRbs.LRbt.LRbu.LRz.LRbv.LRco.LRcm.LRcn.LRy').contents(),
                    h = e.find('td.LRay.LRbc.LRbd.LRbe.LRbf.LRbg.LRbh.LRbi.LRbj.LRbk.LRz.LRbl.LRce.LRcc.LRcd.LRy').contents(),
                    i;
                i = 0 < f.length ? f : 0 < g.length ? g : h;
                var j = i.eq(c),
                    k = j.text();
                'Low' == k && e.addClass('low-ticket-priority')
            })
        }
    };
$(document).ready(function() {
    removeLow(), setTimeout(low, 1700)
}), $('*').click(function() {
    removeLow(), setTimeout(low, 1300)
}), $(window).focus(function() {
    removeLow(), setTimeout(low, 1300)
});
