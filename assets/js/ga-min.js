---
---

'use strict';
(function(){var a=window.location.href,c=a.split('/'),d;d=a==='{{ site.url }}'?'index':_.last(c),ga('create','{{ site.ga }}','auto'),ga('send',{hitType:'pageview',page:location.pathname,title:d})})();
