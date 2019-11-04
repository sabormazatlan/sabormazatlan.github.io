(function($) {
    "use strict"; // Start of use strict
    
    var $nav = $("#nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    var $logo = $("#logo");
    $logo.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#nav',
    offset: 56
  });
  
})(jQuery); // End of use strict

// Parallax
var parallaxElements = $('.parallax'),
parallaxQuantity = parallaxElements.length

$(window).on('scroll', function () {
var $nav = $("#nav");
$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
var $logo = $("#logo");
$logo.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

window.requestAnimationFrame(function () {
    for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElements.eq(i)
        var scrolled = $(window).scrollTop()

        currentElement.css({
            transform: 'translate3d(0,' + scrolled * 0.3 + 'px, 0)',
        })
    }
})
})