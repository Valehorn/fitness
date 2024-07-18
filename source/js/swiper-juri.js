import { Swiper } from './vendor/swiper-bundle';
import { Navigation } from './vendor/modules';
import '../sass/vendor/swiper.scss';

const juriSwiperContainer = document.querySelector('.swiper-juri');

const juriSwiperInit = () => {
  const breakpoint = window.innerWidth;
  new Swiper(juriSwiperContainer, {
    modules: [Navigation],
    speed: 600,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    allowTouchMove: breakpoint < 1366,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 4,
      },
    }
  });
};


export { juriSwiperInit };
