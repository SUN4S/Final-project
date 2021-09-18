const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  centerSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    
    576: {
      slidesPerView: 2
    },
    
    992: {
      slidesPerView: 3
    }
  },
});