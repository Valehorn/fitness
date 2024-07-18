import { juriSwiperInit } from './swiper-juri';
import { reviewsSwiperInit } from './swiper-reviews';
import { faqTabsToggle } from './faq-tabs';
import { faqAccordionToggle } from './accordion';
import { changePriceTab } from './price-tab';
import { checkBreakpointchange } from './utils';
import './validate-form';

const bootStrap = () => {
  changePriceTab();
  juriSwiperInit();
  checkBreakpointchange(reviewsSwiperInit);
  faqTabsToggle();
  faqAccordionToggle();
};

bootStrap();
