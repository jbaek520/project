// Light Luminous
new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

// Fadeup Animation AOS 
// AOS.init();
AOS.init({
  duration: 3000
});