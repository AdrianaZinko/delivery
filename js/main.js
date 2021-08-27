var swiper = new Swiper(".my-swiper", {
    slidesPerView: 1, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 480px
        1199: {
          slidesPerView: 3,
          spaceBetween: 30
        }, 
      }
  });
 