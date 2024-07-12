import { juriSwiperInit } from './swiper-juri';
import { faqTabsToggle } from './faq-tabs';
import { faqAccordionToggle } from './accordion';

const bootStrap = () => {
  juriSwiperInit();
  faqTabsToggle();
  faqAccordionToggle();
};

bootStrap();
// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import 'swiper/css';
