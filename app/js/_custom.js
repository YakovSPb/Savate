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

     $(".gallerypdf").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        autoSize: true,
        type: 'iframe',
        iframe: {
            preload: false // fixes issue with iframe and IE
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
   $('.select input').attr('readonly', true);

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

if(select){
 select.addEventListener('click', function() {
 for(tab of tabs) {
  tab.classList.remove('search_list__active');
 }
}) 
}


}
clickTabsSearch()


//LOOK ALL
// // LOOK ALL
var mediaQuery = window.matchMedia("screen and (max-width: 1000px)");
var mediaQuery1200 = window.matchMedia("screen and (max-width: 1200px)");
mediaQuery.addListener(foo);
mediaQuery1200.addListener(foo2);
foo(mediaQuery);
foo2(mediaQuery1200)

       
function foo(mq) {
    if(mq.matches){
       SpoilerAccording()
    } 
}
function foo2(mq) {
    if(mq.matches){
      mobileHasSubMenu();
    }
}


// MOBILE MENU
const link = document.getElementsByClassName('gumburger')
const close = document.getElementsByClassName('menu-item--close')
const menu = document.getElementsByClassName('menu')

link[0].addEventListener('click', event => {
    event.preventDefault()
    menu[0].classList.add('menu--active')

})
close[0].addEventListener('click', event => {
    event.preventDefault()
    menu[0].classList.remove('menu--active')
        })

function mobileHasSubMenu(){
  $('.menu__item--hassubmenu').click(function(e){
    $(e.target).find('.menu__submenu').slideToggle()
    $(this).toggleClass('menu__item--hassubmenu_open')
  })
}

//Spoiler according
function SpoilerAccording(){
  let myspeed = 1000;
  let itemHeight = $('.tbody_according .tr').height();
  $('.tbody_according .tr').css('height','124');

$('.tbody_according .btn--look_down').click(
    function() {
   $(this).parent().prev().animate({height:itemHeight}, myspeed);
   $(this).parent().toggleClass('btn_according--active');
    });


$('.btn--look_up').click(
    function() {
    $(this).parent().prev().animate({height:124}, myspeed);
    $(this).parent().toggleClass('btn_according--active');
    });
}


});
