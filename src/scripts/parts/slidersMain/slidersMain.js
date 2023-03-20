export const slidersMain = () => {
  const swiper = new Swiper('.js-keys-carousel', {
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
  const swiper2 = new Swiper('.js-keys__partners', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 40,
    breakpoints:{
      667:{
        spaceBetween: 84,
      }
    }
  });
  const swiper4 = new Swiper('.experience__swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 30,
    breakpoints:{
      1024:{
        slidesPerView: 6,
      }
    }
  });
  const swiper3 = new Swiper('.js-info-swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    pagination: {
      el: '.js-info-pagination',
    },
    spaceBetween: 20,
    autoHeight:true,
    breakpoints:{
      720:{
        slidesPerView: 'auto',
        spaceBetween: 30,
      }
    }
  });
}
