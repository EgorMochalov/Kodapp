export const slidersMain = () => {
  const swiper = new Swiper('.section-keys__swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 30,
    initialSlide: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.section-keys__swiper-next',
      prevEl: '.section-keys__swiper-prev',
    },
  });
  const swiper2 = new Swiper('.section-keys__partners', {
    // Optional parameters
    slidesPerView: 6,
  });
  const swiper3 = new Swiper('.info-swiper', {
    // Optional parameters
    slidesPerView: 3,
    pagination: {
      el: '.info-pagination',
    },
    spaceBetween: 30,
    autoHeight:true
  });
}
