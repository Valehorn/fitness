import { openVideo, checkIframeDisplay } from './video';
import { juriSwiperInit } from './swiper-juri';
import { reviewsSwiperInit } from './swiper-reviews';
import { faqTabsToggle } from './faq-tabs';
import { faqAccordionToggle } from './accordion';
import { changePriceTab } from './price-tab';
import './validate-form';

const bootStrap = () => {
  checkIframeDisplay();
  openVideo();
  changePriceTab();
  juriSwiperInit();
  reviewsSwiperInit();
  faqTabsToggle();
  faqAccordionToggle();
};

bootStrap();
