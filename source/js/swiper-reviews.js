import { Swiper } from './vendor/swiper-bundle';
import { Navigation } from './vendor/modules';
import '../sass/vendor/swiper.scss';

const reviewsSwiperContainer = document.querySelector('.swiper-reviews');

const reviewsSwiperInit = () => {
  const reviewsSwiper = new Swiper(reviewsSwiperContainer, {
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
    } else {
      prevButton.classList.remove('swiper-button-prev--disabled');
      prevButton.disabled = false;
    }

    if (reviewsSwiper.isEnd) {
      nextButton.classList.add('swiper-button-prev--disabled');
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove('swiper-button-prev--disabled');
      nextButton.disabled = false;
    }
  }
  updateReviewsButtons();
};

//Поиск всех методов свайпера для лока кнопки занял 5 часов.

export { reviewsSwiperInit };

