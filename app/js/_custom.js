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



    $("a[rel=group]").fancybox({
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'over',
        'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? '   ' + title : '') + '</span>';
        }
    });


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
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 10);
    }
  }

  var goTopBtn = document.querySelector('.up_arrow');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);



//Selectize
   $('.select').selectize({
        create: true
    });

//___tabs search click

function clickTabsSearch(){
  const tabs = document.querySelectorAll('.search_list li');
  const select = document.querySelector('.selectize-control .selectize-input');

  for(tab of tabs) {
    tab.addEventListener('click', e =>{
      for(el of tabs){
        el.classList.remove('search_list__active');
      }
      e.target.classList.add('search_list__active');
    })
  }


select.addEventListener('click', function() {
 for(tab of tabs) {
  tab.classList.remove('search_list__active');
 }
})

}
clickTabsSearch()

});
