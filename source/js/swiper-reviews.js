import { Swiper } from './vendor/swiper-bundle';
import { Navigation } from './vendor/modules';
import '../sass/vendor/swiper.scss';

const reviewsSwiperContainer = document.querySelector('.swiper-reviews');

const reviewsSwiperInit = () => {
  new Swiper(reviewsSwiperContainer, {
    modules: [Navigation],
    speed: 400,
    spaceBetween: 40,
    slidesPerView: 1,
    loop: false,
    lockClass: '.swiper-button-prev--disabled',
    navigation: {
      nextEl: '.swiper-button-reviews-next',
      prevEl: '.swiper-button-reviews-prev',
    },
  });
};

export { reviewsSwiperInit };

