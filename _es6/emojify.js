(function () {
  emojify.setConfig({
    emojify_tag_type : 'g-emoji',
    img_dir          : '/CDN/Universal_App_Assets/img/emoji'
  });

  emojify.run();

  $('g-emoji img').attr('title', 'Alexander Culligan');
})();
