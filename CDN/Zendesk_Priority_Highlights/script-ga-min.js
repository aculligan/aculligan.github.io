'use strict';
! function(e, t, n, a, o, i, s) {
    e.GoogleAnalyticsObject = o, e.ga = e.ga || function() {
        (e.ga.q = e.ga.q || []).push(arguments)
    }, e.ga.l = 1 * new Date, i = t.createElement(n), s = t.getElementsByTagName(n)[0], i.async = 1, i.src = "https://www.google-analytics.com/analytics.js", s.parentNode.insertBefore(i, s)
}(window, document, "script", 0, "ga");
var sendAnalytics = function() {
    if (0 < window.location.href.indexOf("agent/filters")) {
        var e = window.location.host,
            t = e.split(".");
        t[0], t[1];
        ga("create", "UA-87536814-1", "auto"), ga("set", "checkProtocolTask", function() {}), ga("require", "displayfeatures"), ga("set", "page", e), ga("send", {
            hitType: "event",
            eventCategory: "Usage",
            eventAction: "Use",
            eventLabel: "App Loaded"
        })
    }
};
$(document).ready(function() {
    setTimeout(sendAnalytics, 1700)
}), $("*").click(function() {
    setTimeout(sendAnalytics, 700)
}), $(window).focus(function() {
    setTimeout(sendAnalytics, 700)
});