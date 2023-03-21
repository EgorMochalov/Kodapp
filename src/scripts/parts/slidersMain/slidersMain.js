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
        nextEl: '.js-keys__swiper-next',
        prevEl: '.js-keys__swiper-prev',
      }
    });
  })


  document.querySelectorAll(".js-keys__partners").forEach(e => {
    new Swiper(e, {
      // Optional parameters
      slidesPerView: 'auto',
      spaceBetween: 40,
      breakpoints: {
        667: {
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
        1024: {
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
        el: '.js-info-pagination',
      },
      spaceBetween: 20,
      autoHeight: true,
      breakpoints: {
        720: {
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
        667: {
          slidesPerView: 'auto',
          enabled: false,
        }
      },
      navigation: {
        nextEl: '.js-designing__swiper-next',
        prevEl: '.js-designing__swiper-prev',
      }
    });
  })

  // document.querySelectorAll(".js-list__swiper").forEach(e => {
  //   new Swiper(e, {
  //     // Optional parameters
  //     slidesPerView: 1,
  //     slidesPerGroup: 1,
  //     spaceBetween: 20,
  //     grid: {
  //       rows: 3,
  //       fill: "row",
  //     },
  //     breakpoints: {
  //       1024: {
  //         slidesPerView: 3,
  //         slidesPerGroup: 3,
  //         spaceBetween: 30,
  //         grid: {
  //           rows: 3,
  //           fill: "row",
  //         },
  //       },
  //       667: {
  //         slidesPerView: 2,
  //         slidesPerGroup: 2,
  //         spaceBetween: 20,
  //         grid: {
  //           rows: 3,
  //           fill: "row",
  //         },
  //       }
  //     },
  //     navigation: {
  //       nextEl: '.js-blog__swiper-next',
  //       prevEl: '.js-blog__swiper-prev',
  //     },
  //     pagination: {
  //       el: '.section-blog__pagination',
  //       clickable: true,
  //       renderBullet: function (index, className) {
  //         return `<span class="blog__swiper-pagination-bullet swiper-pagination-bullet">${index}</span>`;
  //       },
  //     },
  //   });
  // })
}
