import { Swiper } from './vendor/swiper-bundle';
import { Navigation } from './vendor/modules';
import '../sass/vendor/swiper.scss';

const reviewsSwiperContainer = document.querySelector('.swiper-reviews');

const reviewsSwiperInit = () => {
  const breakpoint = window.innerWidth;
  const reviewsSwiper = new Swiper(reviewsSwiperContainer, {
    modules: [Navigation],
    speed: 600,
    spaceBetween: 40,
    slidesPerView: 1,
    loop: false,
    lockClass: '.swiper-button-prev--disabled',
    navigation: {
      nextEl: '.swiper-button-reviews-next',
      prevEl: '.swiper-button-reviews-prev',
    },
    allowTouchMove: breakpoint < 1366,
    on: {
      slideChange: () => {
        updateReviewsButtons();
      },
      reachEnd: () => {
        updateReviewsButtons();
      },
      reachBeginning: () => {
        updateReviewsButtons();
      }
    }
  });

  function updateReviewsButtons() {
    const prevButton = document.querySelector('.swiper-button-reviews-prev');
    const nextButton = document.querySelector('.swiper-button-reviews-next');

    if (reviewsSwiper.isBeginning) {
      prevButton.classList.add('swiper-button-prev--disabled');
      prevButton.disabled = true;
      reviewsSwiper.allowSlidePrev = false;
    } else {
      prevButton.classList.remove('swiper-button-prev--disabled');
      prevButton.disabled = false;
      reviewsSwiper.allowSlidePrev = true;
    }

    if (reviewsSwiper.isEnd) {
      nextButton.classList.add('swiper-button-prev--disabled');
      nextButton.disabled = true;
      reviewsSwiper.allowSlideNext = false;
    } else {
      nextButton.classList.remove('swiper-button-prev--disabled');
      nextButton.disabled = false;
      reviewsSwiper.allowSlideNext = true;
    }
  }
  updateReviewsButtons();
};

export { reviewsSwiperInit };
