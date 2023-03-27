export const slidersMain = () => {

  document.querySelectorAll(".js-keys-carousel").forEach(e => {
    new Swiper(e, {
      // Optional parameters
      slidesPerView: 'auto',
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 30,
      initialSlide: 1,
      // Navigation arrows
      navigation: {
        nextEl: e.nextElementSibling.querySelector('.js-keys__swiper-next'),
        prevEl: e.nextElementSibling.querySelector('.js-keys__swiper-prev'),
      }
    });
  })


  document.querySelectorAll(".js-keys__partners").forEach(e => {
    new Swiper(e, {
      // Optional parameters
      slidesPerView: 'auto',
      spaceBetween: 40,
      breakpoints: {
        700: {
          spaceBetween: 84,
        }
      }
    });
  })

  document.querySelectorAll(".experience__swiper").forEach(e => {
    new Swiper(e, {
      // Optional parameters
      slidesPerView: 'auto',
      spaceBetween: 30,
      breakpoints: {
        1210: {
          slidesPerView: 6,
        }
      }
    });
  })

  document.querySelectorAll(".expertis__swiper").forEach(e => {
    new Swiper(e, {
      // Optional parameters
      slidesPerView: 'auto',
      spaceBetween: 30,
    });
  })

  document.querySelectorAll(".js-info-swiper").forEach(e => {
    new Swiper(e, {
      // Optional parameters
      slidesPerView: 'auto',
      pagination: {
        el: e.nextElementSibling,
      },
      spaceBetween: 20,
      autoHeight: true,
      breakpoints: {
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
        }
      }
    });
  })

  document.querySelectorAll(".js-section-designing__swiper").forEach(e => {
    new Swiper(e, {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        700: {
          slidesPerView: 'auto',
          enabled: false,
        }
      },
      navigation: {
        nextEl: e.nextElementSibling.querySelector('.js-designing__swiper-next'),
        prevEl: e.nextElementSibling.querySelector('.js-designing__swiper-prev'),
      }
    });
  })
}
