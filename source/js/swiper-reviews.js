import { Swiper } from './vendor/swiper-bundle';
import { Navigation } from './vendor/modules';
import '../sass/vendor/swiper.scss';

const reviewsSwiperContainer = document.querySelector('.reviews__swiper');

const reviewsSwiperInit = () => {
  new Swiper(reviewsSwiperContainer, {
    modules: [Navigation],
    speed: 400,
    spaceBetween: 40,
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export { reviewsSwiperInit };
