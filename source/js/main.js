import { juriSwiperInit } from './swiper-juri';
import { reviewsSwiperInit } from './swiper-reviews';
import { faqTabsToggle } from './faq-tabs';
import { faqAccordionToggle } from './accordion';
import { changePriceTab } from './price-tab';

const bootStrap = () => {
  changePriceTab();
  juriSwiperInit();
  reviewsSwiperInit();
  faqTabsToggle();
  faqAccordionToggle();
};

bootStrap();
