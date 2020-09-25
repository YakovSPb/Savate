document.addEventListener("DOMContentLoaded", function() {


	//fancy box
$('[data-fancybox="gallery"]').fancybox({
});
$('.fancybox-media').fancybox({
    type: 'iframe',
    maxWidth: 853,
    maxHeight: 480,
    padding: 0,
    openEffect: 'elastic',
    openSpeed: 250,
    closeEffect: 'elastic',
    closeSpeed: 150,
    closeClick: true,
    closeBtn: true,
    iframe: {
        preload: false // fixes issue with iframe and IE
    },

})


// arrow to up
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffsfet > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 10);
    }
  }

  var goTopBtn = document.querySelector('.up_arrow');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);


});
