import { juriSwiperInit } from './swiper-juri';
import { faqTabsToggle } from './faq-tabs';
import { faqAccordionToggle } from './accordion';
import { changePriceTab } from './price-tab';

const bootStrap = () => {
  changePriceTab();
  juriSwiperInit();
  faqTabsToggle();
  faqAccordionToggle();
};

bootStrap();
