(function () {
  const commentField = '#txtarea-0';
  const $commentField = $(commentField);
  const commentFieldset = '#txtarea-field-0';
  const $commentFieldset = $(commentFieldset);
  const contactField = 'contact-field';
  const contactFieldClass = '.contact-field';
  const contactFieldVisible = '.contact-field:visible';
  const $contactField = $(contactFieldClass);
  const $contactForm = $('.contact-form');
  const $contactFormNote = $('.p-contact');
  const disabled = 'disabled';
  const disabledItem = 'disabled-item';
  const $dropFieldZero = $('#drop-field-0');
  const $dropFieldOne = $('#drop-field-1');
  const $dropFieldOneButton = $('#drop-1');
  const $dropFieldTwo = $('#drop-field-2');
  const $dropFieldTwoButton = $('#drop-3');
  const $dropFieldThree = $('#drop-field-3');
  const $dropFieldThreeButton = $('#drop-3');
  const $dropFieldFour = $('#drop-field-4');
  const $dropFieldFourButton = $('#drop-4');
  const $emailError = $('#email-error');
  const $emailField = $('#txt-1');
  const $emailFieldset = $('#email-question');
  const fieldset = 'fieldset';
  const $fieldset = $(fieldset);
  const focused = ':focus';
  const label = 'label';
  const list = 'ul';
  const listItem = 'li';
  const menu = 'menu';
  const menuClass = '.menu';
  const $menu = $(menuClass);
  const menuButton = 'menu-btn';
  const menuButtonClass = '.menu-btn';
  const menuVisible = '.menu:visible';
  const $menuButton = $(menuButtonClass);
  const menuButtonFocusedClass = 'focused-menu-btn';
  const menuButtonFocused = '.menu-btn:focus';
  const menuButtonOpen = 'open-menu-btn';
  const menuButtonOpenClass = '.open-menu-btn';
  const menuButtonArrowClass = '.menu-btn-arrow';
  const menuButtonText = $menuButton.find('span');
  const $menuError = $('#menu-error');
  const menuFieldClass = '.menu-field';
  const $menuField = $(menuFieldClass);
  const menuItemClass = '.menu-item';
  const menuItemFocused = '.menu-item:focus';
  const $menuItem = $(menuItemClass);
  const $messageError = $('#message-error');
  const $nameError = $('#name-error');
  const $nameField = $('#txt-0');
  const questionVisible = '.question:visible';
  const questionClass = '.question';
  const span = 'span';
  const $submitButton = $('.contact-submit');
  const submitButtonDisabled = 'contact-submit-disabled';
  const $submitField = $('.submit-div');
  const visible = ':visible';
  const downKey = 40;
  const endKey = 35;
  const enterKey = 13;
  const homeKey = 36;
  const pagedownKey = 34;
  const pageupKey = 33;
  const spacebarKey = 32;
  const tabKey = 9;
  const upKey = 38;
  let $disabledItem;
  let $disabledItemVisible;
  let $menuButtonFocused;
  let $menuButtonOpen;
  let $menuButtonOpenTextSpan;
  let $menuButtonOpenText;
  let $menuButtonOpenParent;
  let $nextAllQuestions;
  let $nextAllQuestionFields;
  let $clickTarget;
  let $menuButtonClicked;
  const clearMenuButtonOpen = function clearThisMenuButton() {
    $menuButtonOpenTextSpan.attr('value', '');
    $menuButtonOpenTextSpan.text('');
  };
  const clearAllNext = function clearAllNextFields() {
    $menuField.hide();
    $menuButtonOpen.focus();
    $nextAllQuestions.not(commentFieldset).hide();
    $nextAllQuestionFields.each(function () {
      if ($(this).hasClass(menuButton)) {
        let $thisText = $(this).find(span);
        $thisText.text('');
      }
      if (!$(this).hasClass(menuButton)) {
        $(this).not($commentField).val('');
      }
    });
    $menuButtonOpen.removeClass(menuButtonOpen);
    emptyMenu();
    validate();
  };
  const validate = function validateFields() {
    $disabledItem = $('.disabled-item');
    $disabledItemVisible = $('.disabled-item:visible');
    if ($nameError.is(visible) || $emailError.is(visible) || $messageError.is(visible) || $disabledItemVisible.length > 0) {
      $submitButton.prop(disabled, true).addClass(submitButtonDisabled);
    }
    if (!$nameError.is(visible) && !$emailError.is(visible) && !$messageError.is(visible) && $disabledItemVisible.length < 1) {
      $submitButton.prop(disabled, false).removeClass(submitButtonDisabled);
    }
  };
  const emptyMenu = function validateMenu() {
    $disabledItem = $('.disabled-item');
    $disabledItemVisible = $('.disabled-item:visible');
    if ($disabledItemVisible.length > 0) {
      $menuError.show();
    }
    if ($disabledItemVisible.length < 1) {
      $menuError.hide();
    }
  };

  const hexDecoder = function (input) {
    const hex = input.toString();
    let str = '';
    for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  }

  // generates a random number that's ten digits long
  const getRandomNumber = function () {
    return crypto.getRandomValues(new Uint32Array(1))[0];
  };

  // gets geolocation and anonymizes it to only be county code
  const getGeo = function () {
    return new Promise(function (resolve) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://ipapi.co/json/');
      xhr.send();
      xhr.onload = function() {
        const responseText = xhr.response;
        const responseJson = JSON.parse(responseText);
        const geoCode = `${responseJson.country}`;
        const uiLangSplit = `${responseJson.languages}`.split('-');
        const browserLanguage = uiLangSplit[0];
        resolve([geoCode, browserLanguage]);
      };
    });
  };

  // Google Analytics event action
  const gaEvent = function (gaCID, gaC, gaL, gaAV) {
    const payload = {
      protocolVersion: 'v=1',
      trackingId: 'tid=UA-87536814-1',
      anonymizeIp: 'aip=1',
      dataSource: 'ds=web',
      anonymousClientId: `cid=${gaCID}`,
      anonymousIp: 'uip=8.8.8.8',
      anonymousLocation: `geoid=${gaC}`,
      userLanguage: `ul=${gaL}`,
      hitType: 't=event',
      eventCategory: 'ec=Uninstall',
      eventAction: `ea=${gaAV}`,
      eventLabel: 'el=App Uninstalled',
      cacheBuster: `z=${getRandomNumber()}`,
    };
    let gaEventStr = '';
    const payloadValues = Object.values(payload);
    payloadValues.forEach(function (value) {
      gaEventStr += `${value}&`;
    });
    gaEventStr = gaEventStr.slice(0, -1);
    const gaEventMessage = gaEventStr.replace(/ /g, '%20');
    const gaEventRequest = new XMLHttpRequest();
    gaEventRequest.open("POST", "https://www.google-analytics.com/collect", true);
    gaEventRequest.send(gaEventMessage);
  };

  // https://aculligan.github.io/uninstall?utm_source=Uninstall&utm_medium=0.0.1&utm_campaign=App%20Uninstalled

  $(document).ready(function () {
    const thisURL = window.location.search;
    $nameField.focus();
    window.history.replaceState('uninstall', 'Alexander Culligan - Uninstall', '/uninstall');
    if (thisURL.indexOf('utm') > 0) {

      getGeo().then(function (promise) {
        let utmID;
        ga(function (tracker) {
          utmID = tracker.get('clientId');
        });
        const utmAV = thisURL.match(/((\d).(\d).(\d))/g)[0];
        const utmL = promise[1];
        const utmC = promise[0];

        gaEvent(utmID, utmC, utmL, utmAV);
      });
    }

    if (thisURL.indexOf('6749') > 0) {
      const gaCID = hexDecoder(
        thisURL
        .match(/(6749=([a-z0-9]+)&)/g)[0]
        .slice(0, -1)
        .split('=')[1]
      );
      const gaC = hexDecoder(
        thisURL
        .match(/(7543=([a-z0-9]+)&)/g)[0]
        .slice(0, -1)
        .split('=')[1]
      );
      const gaL = hexDecoder(
        thisURL
        .match(/(754c=([a-z0-9]+)&)/g)[0]
        .slice(0, -1)
        .split('=')[1]
      );
      const gaAV = hexDecoder(
        thisURL
        .match(/(6156=([a-z0-9]+)&)/g)[0]
        .slice(0, -1)
        .split('=')[1]
      );

      gaEvent(gaCID, gaC, gaL, gaAV);
    }
  });

  $nameField.keyup(function (e) {
    let nameValue = $nameField.val().length;
    if (nameValue === 0) {
      $nameError.show();
    }
    if (nameValue > 0) {
      $nameError.hide();
      $emailFieldset.show();
    }
    validate();
  });

  $emailField.keyup(function (e) {
    let emailValue = $emailField.val();
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
    if (validEmail === false) {
      $emailError.show();
    }
    if (validEmail === true) {
      $emailError.hide();
      $dropFieldZero.show();
    }
    validate();
  });

  $menuButton.focus(function () {
    $(this).addClass(menuButtonFocusedClass);
  });

  $menuButton.blur(function () {
    $(this).removeClass(menuButtonFocusedClass);
  });

  $menuButton.click(function () {
    let thisID = $(this).attr('id');
    let $thisMenu = $(`#${thisID}-menu`);
    $(this).focus();
    $thisMenu.toggle();
    $menuField.not($thisMenu).hide();
    if ($thisMenu.is(visible)) {
      $(this).addClass(menuButtonOpen)
        .addClass(disabledItem);
    } else {
      $menuButton.removeClass(menuButtonOpen)
        .removeClass(disabledItem);
    }
    $menuButtonOpen = $(menuButtonOpenClass);
    $menuButtonOpenTextSpan = $menuButtonOpen.find('span');
    $menuButtonOpenText = $menuButtonOpenTextSpan.text();
    $menuButtonOpenParent = $menuButtonOpen.parent();
    $nextAllQuestions = $menuButtonOpenParent.nextAll(fieldset);
    $nextAllQuestionFields = $nextAllQuestions.find(contactFieldClass);
    emptyMenu();
    validate();
  });

  $menuItem.click(function () {
    let $itemSpan = $(this).find(span);
    let itemText = $itemSpan.text();
    let itemValue = $itemSpan.attr('value');
    $menuButtonOpenTextSpan.text(itemText);
    $menuButtonOpenTextSpan.attr('value', itemValue);
    $menuButtonOpen.removeClass(disabledItem);
    if (itemText === $menuButtonOpenText) {
      $menuField.hide();
      $menuButtonOpen.focus()
        .removeClass(menuButtonOpen);
    } else {
      clearAllNext();
    }
    if (itemText === 'I have a question') {
      $dropFieldOne.show();
      $dropFieldOneButton.addClass(disabledItem);
    }
    if (itemText === 'I need support') {
      $dropFieldTwo.show();
      $dropFieldTwoButton.addClass(disabledItem);
    }
    if (itemText === 'A Zendesk App') {
      $dropFieldThree.show();
      $dropFieldThreeButton.addClass(disabledItem);
    }
    if (itemText === 'A Chrome Extension') {
      $dropFieldFour.show();
      $dropFieldFourButton.addClass(disabledItem);
    }
    if (itemText === 'I have a request or an idea' || itemText === 'I have a special project' || itemText === 'Something else' || itemText === 'A tip' || $dropFieldThreeButton.text().length > 0 || $dropFieldFourButton.text().length > 0) {
      $commentFieldset.show();
    }
    emptyMenu();
    validate();
  });

  $(document).mouseup(function (e) {
    if (!$menuButton.is(e.target) && !$(list).is(e.target) && !$(listItem).is(e.target) && !$(span).is(e.target) && $menuField.is(visible)) {
      e.preventDefault();
      clearMenuButtonOpen();
      clearAllNext();
    }
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27 && $menuField.is(visible)) {
      e.preventDefault();
      clearMenuButtonOpen();
      clearAllNext();
    }
  });

  $(document).keydown(function (e) {
    let $lastContactFieldVisible = $(contactFieldVisible).last();
    let $menuButtonFocused = $(menuButtonFocused);
    let $menuButtonFocusedParent = $menuButtonFocused.parent();
    let $prevQuestionFieldsets = $menuButtonFocusedParent.prevAll(questionVisible);
    let $prevQuestionField = $prevQuestionFieldsets.eq(0).find(contactFieldClass);
    let $menuVisible = $(menuVisible);
    let $menuItemsVisible = $menuVisible.find(menuItemClass);
    let $firstChild = $menuItemsVisible.first();
    let $currentChild = $(menuItemFocused);
    let $nextChild = $currentChild.next();
    let $previousChild = $currentChild.prev();
    let $lastChild = $menuItemsVisible.last();
    if ((e.shiftKey && e.which === tabKey) && !$menu.is(visible) && $menuButton.is(focused) && $prevQuestionFieldsets.eq(0).is($emailFieldset)) {
      e.preventDefault();
      $emailField.focus();
    }
    if ((e.shiftKey && e.which === tabKey) && !$menu.is(visible) && $menuButton.is(focused) && !$prevQuestionFieldsets.eq(0).is($emailFieldset)) {
      e.preventDefault();
      $prevQuestionField.focus();
    }
    if (e.which === tabKey && !$menu.is(visible) && $lastContactFieldVisible.is(focused) && !$submitButton.is(visible) && !$commentField.is(visible)) {
      e.preventDefault();
      $nameField.focus();
    }
    if ((e.which === spacebarKey || e.which === enterKey) && $menuButton.is(focused)) {
      e.preventDefault();
      $menuButtonFocused.click();
    }
    if ((e.shiftKey && e.which === tabKey) && $menuButton.is(focused) && $menu.is(visible)) {
      $menuButtonFocused.click();
    }
    if (e.which === downKey && !$menu.is(visible) && $menuButton.is(focused)) {
      e.preventDefault();
      $menuButtonFocused.click();
    }
    if ((e.which === tabKey || e.which === downKey) && $lastChild.is(focused)) {
      e.preventDefault();
      $menuButtonOpen.focus();
    }
    if (e.which === upKey && $firstChild.is(focused)) {
      e.preventDefault();
      $menuButtonOpen.focus();
    }
    if (e.which === downKey && $menu.is(visible) && $menuButton.is(focused) && !$firstChild.is(focused)) {
      e.preventDefault();
      $firstChild.focus();
    } else if (e.which === downKey && $menu.is(visible) && $menuItem.is(focused)) {
      e.preventDefault();
      $nextChild.focus();
    }
    if (e.which === upKey && $menu.is(visible) && $menuButton.is(focused) && !$lastChild.is(focused)) {
      e.preventDefault();
      $lastChild.focus();
    } else if (e.which === upKey && $menu.is(visible) && $menuItem.is(focused)) {
      e.preventDefault();
      $previousChild.focus();
    }
    if ((e.which === pageupKey || e.which === homeKey) && $menu.is(visible) && $menuItem.is(focused)) {
      e.preventDefault();
      $firstChild.focus();
    }
    if ((e.which === endKey || e.which === pagedownKey) && $menu.is(visible) && $menuItem.is(focused)) {
      e.preventDefault();
      $lastChild.focus();
    }
    if ((e.which === enterKey || e.which === spacebarKey) && $menuItem.is(focused)) {
      e.preventDefault();
      $currentChild.click();
    }
  });

  $commentField.keyup(function (e) {
    let commentValue = $commentField.val().length;
    $submitField.show();
    if (commentValue > 9) {
      $messageError.hide();
    }
    if (commentValue < 10) {
      $messageError.show();
    }
    validate();
  });

  $('.ajaxForm').submit(function (e) {
    e.preventDefault();
    const href = $(this).attr("action");
    let name = $nameField.val();
    let firstName = name.split(' ')[0];
    $contactFormNote.hide();
    $(this).hide();
    $.ajax({
      url: href,
      type: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      success: function(response) {
        if(response.status == "success"){
          $contactForm.typed({
            strings: [`<p class="p-center" style="margin-top: 35vh; font-size: 2.9vw;">Thanks, ${firstName}!</p><p class="p-center" style="font-size: 2.9vw;">I'll get back to you soon</p>`],
            showCursor: false,
            typeSpeed: 100
          });
        } else {
          $contactForm.typed({
            strings: [`<p class="p-center" style="margin-top: 35vh; font-size: 2.9vw;">Sorry, ${firstName}!</p><p class="p-center" style="font-size: 2.9vw;">Something went wrong. Please try again.</p>`],
            showCursor: false,
            typeSpeed: 100
          });
        }
      }
    });
  });
})();
