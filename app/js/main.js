$(function () {
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var product = mixitup('.products-gallery__items', {
    selectors: {
        control: '.product-btn'
    }
  });

  var product = mixitup('.design__items', {
    selectors: {
        control: '.design-btn'
    }
  });
  

});
