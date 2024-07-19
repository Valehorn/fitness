import { openVideo } from './video';
import { juriSwiperInit } from './swiper-juri';
import { reviewsSwiperInit } from './swiper-reviews';
import { faqTabsToggle } from './faq-tabs';
import { faqAccordionToggle } from './accordion';
import { changePriceTab } from './price-tab';
import { cardHover } from './card-hover';
import './validate-form';

const bootStrap = () => {
  openVideo();
  changePriceTab();
  cardHover();
  juriSwiperInit();
  reviewsSwiperInit();
  faqTabsToggle();
  faqAccordionToggle();
};

bootStrap();
