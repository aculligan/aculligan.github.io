'use strict';(function(){var a=window.location.href,b=a.substr(a.length-1),c=a.split('#'),d=$('head').find('title'),e=$('.year'),f=new Date,g=f.getYear();1900>g&&(g+=1900),e.text(g);var h=function h(){$('.bottom-left-svg').click(function(){window.location.assign(''+c[0])})},i=function i(){$('.bottom-right-svg').click(function(){window.location.assign('https://aculligan.github.io/')})},j=function j(){$('.bottom-right-svg').click(function(){window.location.assign('https://aculligan.github.io/license')})},k=function k(){$('.title').typed({strings:['Alex Culligan'],showCursor:!1,typeSpeed:100})},l=function l(){$('.title').typed({strings:['<span>{</span><a href="https://aculligan.github.io/apps">apps</a><span>}<span>'],showCursor:!1,typeSpeed:100})},m=function m(){$('.title').typed({strings:['<span>$(</span><a href="https://aculligan.github.io/tips">tips</a><span>)<span>'],showCursor:!1,typeSpeed:100})},n=function n(){$('.title').typed({strings:['[contact]'],showCursor:!1,typeSpeed:100})},o=function o(){$('.title').typed({strings:['#license'],showCursor:!1,typeSpeed:100})},p=function p(){$('.title').typed({strings:['woah there!^2000<br><span>are you lost?</span>'],showCursor:!1,typeSpeed:100})},q=function q(){$('.title').typed({strings:['go on now...^1000<br>go <a href=\'https://aculligan.github.io/\'><span class=\'green\'><</span><span class=\'red\'>home</span><span class=\'green\'>></span></a>'],showCursor:!1,typeSpeed:100})};$(function(){'/'===b&&k(),0<a.indexOf('apps')&&(l(),j(),h()),0<a.indexOf('tips')&&(m(),j(),h()),0<a.indexOf('contact')&&(n(),j(),h()),0<a.indexOf('license')&&(o(),i(),h()),0<d.text().indexOf('404')&&(p(),$(document).ready(function(){window.setTimeout(function(){$('.alert-svg').hide(),$('.home-svg').show(),$('.title').text(''),$('.typed-cursor').removeClass('small-cursor'),q()},15000)}))})})();
