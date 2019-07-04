"use strict";

(function() {
  var commentField = "#txtarea-0";
  var $commentField = $(commentField);
  var commentFieldset = "#txtarea-field-0";
  var $commentFieldset = $(commentFieldset);
  var contactField = "contact-field";
  var contactFieldClass = ".contact-field";
  var contactFieldVisible = ".contact-field:visible";
  var $contactField = $(contactFieldClass);
  var $contactForm = $(".contact-form");
  var $contactFormNote = $(".p-contact");
  var disabled = "disabled";
  var disabledItem = "disabled-item";
  var $dropFieldZero = $("#drop-field-0");
  var $dropFieldOne = $("#drop-field-1");
  var $dropFieldOneButton = $("#drop-1");
  var $dropFieldTwo = $("#drop-field-2");
  var $dropFieldTwoButton = $("#drop-3");
  var $dropFieldThree = $("#drop-field-3");
  var $dropFieldThreeButton = $("#drop-3");
  var $dropFieldFour = $("#drop-field-4");
  var $dropFieldFourButton = $("#drop-4");
  var $emailError = $("#email-error");
  var $emailField = $("#txt-1");
  var $emailFieldset = $("#email-question");
  var fieldset = "fieldset";
  var $fieldset = $(fieldset);
  var focused = ":focus";
  var label = "label";
  var list = "ul";
  var listItem = "li";
  var menu = "menu";
  var menuClass = ".menu";
  var $menu = $(menuClass);
  var menuButton = "menu-btn";
  var menuButtonClass = ".menu-btn";
  var menuVisible = ".menu:visible";
  var $menuButton = $(menuButtonClass);
  var menuButtonFocusedClass = "focused-menu-btn";
  var menuButtonFocused = ".menu-btn:focus";
  var menuButtonOpen = "open-menu-btn";
  var menuButtonOpenClass = ".open-menu-btn";
  var menuButtonArrowClass = ".menu-btn-arrow";
  var menuButtonText = $menuButton.find("span");
  var $menuError = $("#menu-error");
  var menuFieldClass = ".menu-field";
  var $menuField = $(menuFieldClass);
  var menuItemClass = ".menu-item";
  var menuItemFocused = ".menu-item:focus";
  var $menuItem = $(menuItemClass);
  var $messageError = $("#message-error");
  var $nameError = $("#name-error");
  var $nameField = $("#txt-0");
  var questionVisible = ".question:visible";
  var questionClass = ".question";
  var span = "span";
  var $submitButton = $(".contact-submit");
  var submitButtonDisabled = "contact-submit-disabled";
  var $submitField = $(".submit-div");
  var visible = ":visible";
  var downKey = 40;
  var endKey = 35;
  var enterKey = 13;
  var homeKey = 36;
  var pagedownKey = 34;
  var pageupKey = 33;
  var spacebarKey = 32;
  var tabKey = 9;
  var upKey = 38;
  var $disabledItem;
  var $disabledItemVisible;
  var $menuButtonFocused;
  var $menuButtonOpen;
  var $menuButtonOpenTextSpan;
  var $menuButtonOpenText;
  var $menuButtonOpenParent;
  var $nextAllQuestions;
  var $nextAllQuestionFields;
  var $clickTarget;
  var $menuButtonClicked;

  var clearMenuButtonOpen = function clearThisMenuButton() {
    $menuButtonOpenTextSpan.attr("value", "");
    $menuButtonOpenTextSpan.text("");
  };

  var clearAllNext = function clearAllNextFields() {
    $menuField.hide();
    $menuButtonOpen.focus();
    $nextAllQuestions.not(commentFieldset).hide();
    $nextAllQuestionFields.each(function() {
      if ($(this).hasClass(menuButton)) {
        var $thisText = $(this).find(span);
        $thisText.text("");
      }

      if (!$(this).hasClass(menuButton)) {
        $(this)
          .not($commentField)
          .val("");
      }
    });
    $menuButtonOpen.removeClass(menuButtonOpen);
    emptyMenu();
    validate();
  };

  var validate = function validateFields() {
    $disabledItem = $(".disabled-item");
    $disabledItemVisible = $(".disabled-item:visible");

    if (
      $nameError.is(visible) ||
      $emailError.is(visible) ||
      $messageError.is(visible) ||
      $disabledItemVisible.length > 0
    ) {
      $submitButton.prop(disabled, true).addClass(submitButtonDisabled);
    }

    if (
      !$nameError.is(visible) &&
      !$emailError.is(visible) &&
      !$messageError.is(visible) &&
      $disabledItemVisible.length < 1
    ) {
      $submitButton.prop(disabled, false).removeClass(submitButtonDisabled);
    }
  };

  var emptyMenu = function validateMenu() {
    $disabledItem = $(".disabled-item");
    $disabledItemVisible = $(".disabled-item:visible");

    if ($disabledItemVisible.length > 0) {
      $menuError.show();
    }

    if ($disabledItemVisible.length < 1) {
      $menuError.hide();
    }
  };

  $(document).ready(function() {
    $nameField.focus();
  });
  $nameField.keyup(function(e) {
    var nameValue = $nameField.val().length;

    if (nameValue === 0) {
      $nameError.show();
    }

    if (nameValue > 0) {
      $nameError.hide();
      $emailFieldset.show();
    }

    validate();
  });
  $emailField.keyup(function(e) {
    var emailValue = $emailField.val();
    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      emailValue
    );

    if (validEmail === false) {
      $emailError.show();
    }

    if (validEmail === true) {
      $emailError.hide();
      $dropFieldZero.show();
    }

    validate();
  });
  $menuButton.focus(function() {
    $(this).addClass(menuButtonFocusedClass);
  });
  $menuButton.blur(function() {
    $(this).removeClass(menuButtonFocusedClass);
  });
  $menuButton.click(function() {
    var thisID = $(this).attr("id");
    var $thisMenu = $("#".concat(thisID, "-menu"));
    $(this).focus();
    $thisMenu.toggle();
    $menuField.not($thisMenu).hide();

    if ($thisMenu.is(visible)) {
      $(this)
        .addClass(menuButtonOpen)
        .addClass(disabledItem);
    } else {
      $menuButton.removeClass(menuButtonOpen).removeClass(disabledItem);
    }

    $menuButtonOpen = $(menuButtonOpenClass);
    $menuButtonOpenTextSpan = $menuButtonOpen.find("span");
    $menuButtonOpenText = $menuButtonOpenTextSpan.text();
    $menuButtonOpenParent = $menuButtonOpen.parent();
    $nextAllQuestions = $menuButtonOpenParent.nextAll(fieldset);
    $nextAllQuestionFields = $nextAllQuestions.find(contactFieldClass);
    emptyMenu();
    validate();
  });
  $menuItem.click(function() {
    var $itemSpan = $(this).find(span);
    var itemText = $itemSpan.text();
    var itemValue = $itemSpan.attr("value");
    $menuButtonOpenTextSpan.text(itemText);
    $menuButtonOpenTextSpan.attr("value", itemValue);
    $menuButtonOpen.removeClass(disabledItem);

    if (itemText === $menuButtonOpenText) {
      $menuField.hide();
      $menuButtonOpen.focus().removeClass(menuButtonOpen);
    } else {
      clearAllNext();
    }

    if (itemText === "I have a question") {
      $dropFieldOne.show();
      $dropFieldOneButton.addClass(disabledItem);
    }

    if (itemText === "I need support") {
      $dropFieldTwo.show();
      $dropFieldTwoButton.addClass(disabledItem);
    }

    if (itemText === "A Zendesk App") {
      $dropFieldThree.show();
      $dropFieldThreeButton.addClass(disabledItem);
    }

    if (itemText === "A Chrome Extension") {
      $dropFieldFour.show();
      $dropFieldFourButton.addClass(disabledItem);
    }

    if (
      itemText === "I have a request or an idea" ||
      itemText === "I have a special project" ||
      itemText === "Something else" ||
      itemText === "A tip" ||
      $dropFieldThreeButton.text().length > 0 ||
      $dropFieldFourButton.text().length > 0
    ) {
      $commentFieldset.show();
    }

    emptyMenu();
    validate();
  });
  $(document).mouseup(function(e) {
    if (
      !$menuButton.is(e.target) &&
      !$(list).is(e.target) &&
      !$(listItem).is(e.target) &&
      !$(span).is(e.target) &&
      $menuField.is(visible)
    ) {
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
  $(document).keydown(function(e) {
    var $lastContactFieldVisible = $(contactFieldVisible).last();
    var $menuButtonFocused = $(menuButtonFocused);
    var $menuButtonFocusedParent = $menuButtonFocused.parent();
    var $prevQuestionFieldsets = $menuButtonFocusedParent.prevAll(
      questionVisible
    );
    var $prevQuestionField = $prevQuestionFieldsets
      .eq(0)
      .find(contactFieldClass);
    var $menuVisible = $(menuVisible);
    var $menuItemsVisible = $menuVisible.find(menuItemClass);
    var $firstChild = $menuItemsVisible.first();
    var $currentChild = $(menuItemFocused);
    var $nextChild = $currentChild.next();
    var $previousChild = $currentChild.prev();
    var $lastChild = $menuItemsVisible.last();

    if (
      e.shiftKey &&
      e.which === tabKey &&
      !$menu.is(visible) &&
      $menuButton.is(focused) &&
      $prevQuestionFieldsets.eq(0).is($emailFieldset)
    ) {
      e.preventDefault();
      $emailField.focus();
    }

    if (
      e.shiftKey &&
      e.which === tabKey &&
      !$menu.is(visible) &&
      $menuButton.is(focused) &&
      !$prevQuestionFieldsets.eq(0).is($emailFieldset)
    ) {
      e.preventDefault();
      $prevQuestionField.focus();
    }

    if (
      e.which === tabKey &&
      !$menu.is(visible) &&
      $lastContactFieldVisible.is(focused) &&
      !$submitButton.is(visible) &&
      !$commentField.is(visible)
    ) {
      e.preventDefault();
      $nameField.focus();
    }

    if (
      (e.which === spacebarKey || e.which === enterKey) &&
      $menuButton.is(focused)
    ) {
      e.preventDefault();
      $menuButtonFocused.click();
    }

    if (
      e.shiftKey &&
      e.which === tabKey &&
      $menuButton.is(focused) &&
      $menu.is(visible)
    ) {
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

    if (
      e.which === downKey &&
      $menu.is(visible) &&
      $menuButton.is(focused) &&
      !$firstChild.is(focused)
    ) {
      e.preventDefault();
      $firstChild.focus();
    } else if (
      e.which === downKey &&
      $menu.is(visible) &&
      $menuItem.is(focused)
    ) {
      e.preventDefault();
      $nextChild.focus();
    }

    if (
      e.which === upKey &&
      $menu.is(visible) &&
      $menuButton.is(focused) &&
      !$lastChild.is(focused)
    ) {
      e.preventDefault();
      $lastChild.focus();
    } else if (
      e.which === upKey &&
      $menu.is(visible) &&
      $menuItem.is(focused)
    ) {
      e.preventDefault();
      $previousChild.focus();
    }

    if (
      (e.which === pageupKey || e.which === homeKey) &&
      $menu.is(visible) &&
      $menuItem.is(focused)
    ) {
      e.preventDefault();
      $firstChild.focus();
    }

    if (
      (e.which === endKey || e.which === pagedownKey) &&
      $menu.is(visible) &&
      $menuItem.is(focused)
    ) {
      e.preventDefault();
      $lastChild.focus();
    }

    if (
      (e.which === enterKey || e.which === spacebarKey) &&
      $menuItem.is(focused)
    ) {
      e.preventDefault();
      $currentChild.click();
    }
  });
  $commentField.keyup(function(e) {
    var commentValue = $commentField.val().length;
    $submitField.show();

    if (commentValue > 9) {
      $messageError.hide();
    }

    if (commentValue < 10) {
      $messageError.show();
    }

    validate();
  });
  $submitButton.click(function() {
    var messageobject = {};
    var name = $nameField.val();
    console.log(name);
    var firstName = name.split(" ")[0];
    console.log(firstName);
    var email = $emailField.val();
    console.log(email);
    var message = $commentField.val();
    console.log(message);
    messageobject.Name = name;
    messageobject.Email = email;
    messageobject.Message = message;
    console.log(messageobject);
    $contactFormNote.hide();
    $contactForm.typed({
      strings: [
        '<p class="p-center" style="margin-top: 35vh; font-size: 2.9vw;">Thanks, '.concat(
          firstName,
          '!</p><p class="p-center" style="font-size: 2.9vw;">I\'ll get back to you soon</p>'
        )
      ],
      showCursor: false,
      typeSpeed: 100
    });
    $(this).hide();
    // $.ajax({
    //   url: "https://formspree.io/support@alexculligan.com",
    //   method: "POST",
    //   data: messageobject,
    //   dataType: "json"
    // });
  });
})();
