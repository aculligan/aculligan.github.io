!function(e){function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(module,exports,__webpack_require__){eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(17);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi app\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///multi_app?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar _zendesk_app_framework_sdk = __webpack_require__(2);\n\nvar _zendesk_app_framework_sdk2 = _interopRequireDefault(_zendesk_app_framework_sdk);\n\nvar _i18n = __webpack_require__(3);\n\nvar _i18n2 = _interopRequireDefault(_i18n);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Create a new ZAFClient\n/*\n* This is the first JavaScript file that runs once your iframe is loaded within a Zendesk product.\n*/\nvar client = _zendesk_app_framework_sdk2.default.init();\n\n// Add an event listener to detect once your app is registered with the framework\nclient.on('app.registered', function (appData) {\n  client.get('currentUser.locale').then(function (userData) {\n\n    // Load translations based on the account's current locale\n    _i18n2.default.loadTranslations(userData['currentUser.locale']);\n\n    // Look up app module for the current location\n    var location = appData.context.location;\n    var App = __webpack_require__(9)(\"./\" + location + '.js').default;\n\n    // Create a new instance of the app\n    new App(client, appData);\n  });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/javascripts/index.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./src/javascripts/index.js?")},function(module,exports){eval('module.exports = ZAFClient;\n\n//////////////////\n// WEBPACK FOOTER\n// external "ZAFClient"\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///external_%22ZAFClient%22?')},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _handlebars = __webpack_require__(4);\n\nvar _handlebars2 = _interopRequireDefault(_handlebars);\n\nvar _app_manifest = __webpack_require__(5);\n\nvar _app_manifest2 = _interopRequireDefault(_app_manifest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar defaultLocale = _app_manifest2.default.defaultLocale || 'en';\n\nvar translations = void 0;\n\nfunction tryRequire(locale) {\n  try {\n    return __webpack_require__(6)(\"./\" + locale + '.json');\n  } catch (e) {\n    return null;\n  }\n}\n\nvar I18n = Object.freeze({\n  t: function t(key, context) {\n    if (!translations) {\n      throw new Error('Translations must be initialized with I18n.loadTranslations before calling `t`.');\n    }\n    var keyType = typeof key === 'undefined' ? 'undefined' : _typeof(key);\n    if (keyType !== 'string') {\n      throw new Error('Translation key must be a string, got: ' + keyType);\n    }\n    var template = translations[key];\n    if (!template) {\n      throw new Error('Missing translation: ' + key);\n    }\n    if (!$.isFunction(template)) {\n      if (typeof template !== 'string') {\n        throw new Error('Invalid translation for key: ' + key);\n      }\n      template = _handlebars2.default.compile(template);\n      translations[key] = template;\n    }\n    var html = template(context);\n    return html;\n  },\n  loadTranslations: function loadTranslations(locale) {\n    translations = tryRequire(locale) || tryRequire(locale.replace(/-.+$/, '')) || // e.g. fallback `en-US` to `en`\n    tryRequire(defaultLocale) || {};\n  }\n});\n\n_handlebars2.default.registerHelper('t', function (key, context) {\n  try {\n    return I18n.t(key, context.hash);\n  } catch (e) {\n    console.error(e);\n    return e.message;\n  }\n});\n\nmodule.exports = I18n;\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/javascripts/i18n.js\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./lib/javascripts/i18n.js?")},function(module,exports){eval('module.exports = Handlebars;\n\n//////////////////\n// WEBPACK FOOTER\n// external "Handlebars"\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///external_%22Handlebars%22?')},function(module,exports){eval('module.exports = {\n\t"name": "Secret Service",\n\t"author": {\n\t\t"name": "Alex Culligan",\n\t\t"email": "support@alexculligan.com",\n\t\t"url": "http://secretservice.alexculligan.com"\n\t},\n\t"defaultLocale": "en",\n\t"private": false,\n\t"singleInstall": true,\n\t"location": {\n\t\t"support": {\n\t\t\t"top_bar": "assets/index.html"\n\t\t}\n\t},\n\t"version": "1.1",\n\t"frameworkVersion": "2.0",\n\t"gaID": "UA-87694402-1"\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./dist/manifest.json\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///./dist/manifest.json?')},function(module,exports,__webpack_require__){eval('var map = {\n\t"./en.json": 7,\n\t"./es.json": 8\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\treturn map[req] || (function() { throw new Error("Cannot find module \'" + req + "\'.") }());\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 6;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/translations ^\\.\\/.*\\.json$\n// module id = 6\n// module chunks = 0\n//# sourceURL=webpack:///./src/translations_^\\.\\/.*\\.json$?')},function(module,exports,__webpack_require__){eval('\n    var Handlebars = __webpack_require__(4);\n    module.exports = { "app.description": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Create a Zendesk ticket with an Internal Note.";\n},"useData":true}),\n"app.name": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Secret Service";\n},"useData":true}),\n"confirm-message": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Remember to open the ticket and update the Priority, Assignee and other ticket fields";\n},"useData":true}),\n"created": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Created";\n},"useData":true}),\n"description": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Description";\n},"useData":true}),\n"email": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Email";\n},"useData":true}),\n"loading": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Loading";\n},"useData":true}),\n"open-ticket": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Open Ticket";\n},"useData":true}),\n"requester": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Requester";\n},"useData":true}),\n"subject": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Subject";\n},"useData":true}),\n"submit": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Submit";\n},"useData":true}),\n"ticket": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Ticket";\n},"useData":true}) };\n  \n\n//////////////////\n// WEBPACK FOOTER\n// ./src/translations/en.json\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///./src/translations/en.json?')},function(module,exports,__webpack_require__){eval('\n    var Handlebars = __webpack_require__(4);\n    module.exports = { "app.description": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Cree un ticket de Zendesk con una nota interna.";\n},"useData":true}),\n"app.name": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Servicio Secreto";\n},"useData":true}),\n"confirm-message": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Recuerde abrir el ticket y actualizar Prioridad, Agente asignado y otros campos de ticket";\n},"useData":true}),\n"created": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Creado";\n},"useData":true}),\n"description": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Descripción";\n},"useData":true}),\n"email": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Correo electrónico";\n},"useData":true}),\n"loading": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Cargando";\n},"useData":true}),\n"open-ticket": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Abrir Ticket";\n},"useData":true}),\n"requester": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Solicitante";\n},"useData":true}),\n"subject": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Asunto";\n},"useData":true}),\n"submit": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Enviar";\n},"useData":true}),\n"ticket": (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "Ticket";\n},"useData":true}) };\n  \n\n//////////////////\n// WEBPACK FOOTER\n// ./src/translations/es.json\n// module id = 8\n// module chunks = 0\n//# sourceURL=webpack:///./src/translations/es.json?')},function(module,exports,__webpack_require__){eval('var map = {\n\t"./index.js": 1,\n\t"./top_bar.js": 10\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\treturn map[req] || (function() { throw new Error("Cannot find module \'" + req + "\'.") }());\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 9;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/javascripts ^\\.\\/.*\\.js$\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///./src/javascripts_^\\.\\/.*\\.js$?')},function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _view = __webpack_require__(11);\n\nvar _view2 = _interopRequireDefault(_view);\n\nvar _storage = __webpack_require__(16);\n\nvar _storage2 = _interopRequireDefault(_storage);\n\nvar _i18n = __webpack_require__(3);\n\nvar _i18n2 = _interopRequireDefault(_i18n);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TopBar = function () {\n  function TopBar(client, data) {\n    var _this = this;\n\n    _classCallCheck(this, TopBar);\n\n    this.client = client;\n    this._metadata = data.metadata;\n    this._context = data.context;\n\n    this.storage = new _storage2.default(this._metadata.installationId);\n    this.view = new _view2.default({ afterRender: function afterRender() {\n        var $emailField = $('.email-field');\n\n        // Resize function\n        var resizeApp = function resizeApp(value) {\n          return client.invoke('resize', { height: value });\n        };\n\n        // Get user function\n        var getUser = _this.getCurrentUser();\n\n        // Translate function\n        var translate = function translate(keyword) {\n          return _i18n2.default.t(keyword);\n        };\n\n        // Send event to Google Analytics\n        var gAnalytics = function gAnalytics(category, action, label) {\n          ga('create', 'UA-87694402-1', 'auto');\n          ga('set', 'checkProtocolTask', function () {});\n          ga('require', 'displayfeatures');\n          ga('send', {\n            hitType: 'event',\n            eventCategory: category,\n            eventAction: action,\n            eventLabel: label\n          });\n        };\n\n        // Focus on first field when pane is open\n        client.on('pane.activated', function () {\n          $emailField.focus();\n        });\n\n        resizeApp('360px');\n        getUser.then(function (data) {\n          var $appArea = $('.main');\n          var $confirmationArea = $('.confirmation');\n          var $descriptionField = $('.description-field');\n          var $mandatory = $('.mandatory');\n          var $subjectField = $('.subject-field');\n          var $submitButton = $('.submit_change');\n          var currentUserID = data.user.id;\n\n          gAnalytics('Usage', 'Use', 'Active User');\n\n          // Focus on first text field after app loads\n          $emailField.focus();\n\n          // Keep submit button disabled until all fields are complete\n          $mandatory.keyup(function () {\n            var empty = false;\n            $mandatory.each(function () {\n              if ($(this).val() < 1) {\n                empty = true;\n              }\n            });\n            if (empty) {\n              $submitButton.attr('disabled', 'disabled');\n            } else {\n              $submitButton.removeAttr('disabled');\n            }\n          });\n\n          // Submit ticket\n          $submitButton.click(function () {\n            var ticketRequester = $emailField.val();\n            var ticketSubject = $subjectField.val();\n            var ticketDescription = $descriptionField.val();\n\n            // Create new Showdown converter\n            var converter = new showdown.Converter();\n            converter.setOption('noHeaderId', 'true');\n            converter.setOption('omitExtraWLInCodeBlocks', 'true');\n            converter.setOption('simplifiedAutoLink', 'true');\n            converter.setOption('literalMidWordUnderscores', 'true');\n            converter.setOption('strikethrough', 'true');\n\n            // Convert Markdown to HTML\n            var ticketHTML = converter.makeHtml(ticketDescription);\n\n            // Convert HTML to string for API call\n            var stringedComment = JSON.stringify(ticketHTML);\n\n            // API call variable\n            var createTicket = {\n              url: '/api/v2/tickets.json',\n              type: 'POST',\n              contentType: 'application/json',\n              data: '{\"ticket\": {\\n                      \"submitter_id\": \"' + currentUserID + '\",\\n                      \"requester\": \"' + ticketRequester + '\",\\n                      \"subject\": \"' + ticketSubject + '\",\\n                      \"is_public\": false,\\n                      \"comment\": {\\n                        \"html_body\": ' + stringedComment + ',\\n                        \"public\": false\\n                      }\\n                    }'\n            };\n\n            // Make API call then load confirmation\n            client.request(createTicket).then(function (data) {\n              var ticketID = data.ticket.id;\n              var ticketURL = data.ticket.url;\n              gAnalytics('Create', 'Create Ticket', 'Create Ticket');\n              resizeApp('180px');\n\n              // Load confirmation\n              $appArea.addClass('is-hidden');\n              $confirmationArea.removeClass('is-hidden');\n\n              var $openTicket = $('.open-ticket');\n              var $tConfirm = $('#t-confirm');\n              var $tCreated = $('#t-created');\n              var $ticketIdNumber = $('#ticket-id');\n              var $tTicket = $('#t-ticket');\n\n              // Redirect to ticket and close popover function\n              var ticketRedirect = function ticketRedirect() {\n                client.invoke('routeTo', 'ticket', ticketID);\n                gAnalytics('Visit', 'Visit Ticket', 'Visit Ticket');\n                window.location.reload(true);\n                client.invoke('popover', 'hide');\n              };\n\n              // Add values to confirmation \n              $openTicket.attr('value', translate('open-ticket'));\n              $tConfirm.text(translate('confirm-message'));\n              $tCreated.text(translate('created'));\n              $ticketIdNumber.text(ticketID);\n              $tTicket.text(translate('ticket'));\n\n              // Redirect to ticket when ticket button is clicked\n              $openTicket.click(function () {\n                ticketRedirect();\n              });\n\n              // Redirect to ticket when ID is clicked\n              $ticketIdNumber.click(function () {\n                ticketRedirect();\n              });\n            });\n          });\n        });\n      } });\n\n    this.getCurrentUser().then(this.renderMain.bind(this));\n  }\n\n  _createClass(TopBar, [{\n    key: 'getCurrentUser',\n    value: function getCurrentUser() {\n      return this.client.request({ url: '/api/v2/users/me.json' });\n    }\n  }, {\n    key: 'renderMain',\n    value: function renderMain(data) {\n      this.view.switchTo('main', data.user);\n    }\n  }]);\n\n  return TopBar;\n}();\n\nexports.default = TopBar;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/javascripts/top_bar.js\n// module id = 10\n// module chunks = 0\n//# sourceURL=webpack:///./src/javascripts/top_bar.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jquery = __webpack_require__(12);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _lodash = __webpack_require__(13);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = function () {\n  function View(opts) {\n    _classCallCheck(this, View);\n\n    this.afterRender = opts.afterRender;\n  }\n\n  _createClass(View, [{\n    key: 'renderTemplate',\n    value: function renderTemplate(name, data) {\n      var template = __webpack_require__(14)(\"./\" + name + '.hdbs');\n      return template(data);\n    }\n  }, {\n    key: 'switchTo',\n    value: function switchTo(name, data) {\n      (0, _jquery2.default)('[data-main]').html(this.renderTemplate(name, data));\n      _lodash2.default.isFunction(this.afterRender) && this.afterRender();\n    }\n  }]);\n\n  return View;\n}();\n\nexports.default = View;\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/javascripts/view.js\n// module id = 11\n// module chunks = 0\n//# sourceURL=webpack:///./lib/javascripts/view.js?")},function(module,exports){eval('module.exports = jQuery;\n\n//////////////////\n// WEBPACK FOOTER\n// external "jQuery"\n// module id = 12\n// module chunks = 0\n//# sourceURL=webpack:///external_%22jQuery%22?')},function(module,exports){eval('module.exports = _;\n\n//////////////////\n// WEBPACK FOOTER\n// external "_"\n// module id = 13\n// module chunks = 0\n//# sourceURL=webpack:///external_%22_%22?')},function(module,exports,__webpack_require__){eval('var map = {\n\t"./main.hdbs": 15\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\treturn map[req] || (function() { throw new Error("Cannot find module \'" + req + "\'.") }());\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 14;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/templates ^\\.\\/.*\\.hdbs$\n// module id = 14\n// module chunks = 0\n//# sourceURL=webpack:///./src/templates_^\\.\\/.*\\.hdbs$?')},function(module,exports,__webpack_require__){eval('var Handlebars = __webpack_require__(4);\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;\n\n  return "<div class=\\"main\\" id=\\"form\\">\\n  <fieldset class=\\"c-txt\\">\\n    <label class=\\"c-txt__label\\" for=\\"txt-0\\">"\n    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"requester",{"name":"t","hash":{},"data":data}))\n    + "</label>\\n    <input class=\\"c-txt__input mandatory email-field\\" id=\\"txt-0\\" type=\\"text\\" placeholder=\\""\n    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"email",{"name":"t","hash":{},"data":data}))\n    + "\\">\\n  </fieldset>\\n  <fieldset class=\\"c-txt\\">\\n    <label class=\\"c-txt__label\\" for=\\"txt-0\\">"\n    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"subject",{"name":"t","hash":{},"data":data}))\n    + "</label>\\n    <input class=\\"c-txt__input mandatory subject-field\\" id=\\"txt-1\\" type=\\"text\\">\\n  </fieldset>\\n  <fieldset class=\\"c-txt\\">\\n    <label class=\\"c-txt__label\\" for=\\"txtarea-0\\">"\n    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"description",{"name":"t","hash":{},"data":data}))\n    + "</label>\\n    <textarea class=\\"c-txt__input c-txt__input--area is-resizable mandatory description-field\\" id=\\"txtarea-0\\" wrap=\\"hard\\"></textarea>\\n  </fieldset>\\n  <div id=\\"submit-button\\">\\n    <input class=\\"c-btn c-btn--primary submit_change\\" type=\\"submit\\" value=\\""\n    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"submit",{"name":"t","hash":{},"data":data}))\n    + "\\" disabled=\\"disabled\\"/>\\n  </div>\\n</div>\\n<div class=\\"confirmation is-hidden\\">\\n  <div class=\\"centered\\">\\n    <label class=\\"centered-label\\"><span id=\\"t-ticket\\"></span> <a id=\\"ticket-id\\" href=\\"\\"></a> <span id=\\"t-created\\"></span>!</label>\\n    <p class=\\"centered\\"><span id=\\"t-confirm\\"></span>.</p>\\n  </div>\\n  <div id=\\"ticket-button\\">\\n    <input class=\\"c-btn c-btn--primary open-ticket\\" type=\\"button\\" id=\\"ticket_change\\" value=\\"\\"/>\\n  </div>\\n</div>\\n";\n},"useData":true});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/templates/main.hdbs\n// module id = 15\n// module chunks = 0\n//# sourceURL=webpack:///./src/templates/main.hdbs?')},function(module,exports){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Storage = function () {\n  function Storage(namespace) {\n    _classCallCheck(this, Storage);\n\n    this.namespace = namespace;\n  }\n\n  _createClass(Storage, [{\n    key: 'get',\n    value: function get(key) {\n      return JSON.parse(localStorage.getItem(this.namespace + ':' + key));\n    }\n  }, {\n    key: 'set',\n    value: function set(keyOrObject, value) {\n      var _this = this;\n\n      if (typeof keyOrObject === 'string') {\n        var key = this.namespace + ':' + keyOrObject;\n        localStorage.setItem(key, JSON.stringify(value));\n      } else if ((typeof keyOrObject === 'undefined' ? 'undefined' : _typeof(keyOrObject)) === 'object') {\n        Object.keys(keyOrObject).forEach(function (key) {\n          localStorage.setItem(_this.namespace + ':' + key, JSON.stringify(keyOrObject[key]));\n        });\n      }\n    }\n  }]);\n\n  return Storage;\n}();\n\nexports.default = Storage;\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/javascripts/storage.js\n// module id = 16\n// module chunks = 0\n//# sourceURL=webpack:///./lib/javascripts/storage.js?")},function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/stylesheets/app.scss\n// module id = 17\n// module chunks = 0\n//# sourceURL=webpack:///./src/stylesheets/app.scss?")}]);
