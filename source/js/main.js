import { faqTabs } from './const';

/* import { juriSwiperInit } from './swiper-juri';
import { faqTabsToggle } from './faq-tabs';
import { faqAccordionToggle } from './accordion';

const bootStrap = () => {
  juriSwiperInit();
  faqTabsToggle();
  faqAccordionToggle();
};

bootStrap(); */

const faqTabList = document.querySelector('.faq__tab-list');
const faqDetailsList = document.querySelector('.faq__details-list');
const faqItems = faqDetailsList.querySelectorAll('li');

const loadState = (key) => {
  const state = localStorage.getItem(key);
  return state ? JSON.parse(state) : null;
};

const loadAccordionState = (tabIndex) => {
  const accordionStates = loadState(`accordionStates_${tabIndex}`);
  if (accordionStates) {
    accordionStates.forEach((isOpen, index) => {
      const answer = faqItems[index].querySelector('p');
      if (isOpen) {
        answer.style.height = `${answer.scrollHeight}px`;
      } else {
        answer.style.height = null;
      }
    });
  }
};

const updateFaqDetails = (index) => {
  const currentTab = faqTabs[index];
  faqItems.forEach((item, itemIndex) => {
    const { question, answer } = currentTab[itemIndex];
    item.querySelector('h3').textContent = question;
    item.querySelector('p').textContent = answer;
  });
  loadAccordionState(index);
};

const changeFaqText = (evt) => {
  const faqTabButtons = document.querySelectorAll('.faq__tab-button');
  if (evt.target.classList.contains('faq__tab-button')) {
    const index = Array.from(faqTabButtons).indexOf(evt.target);
    updateFaqDetails(index);
  }
};

const saveState = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};

const saveTabState = () => {
  const faqTabItems = document.querySelectorAll('.faq__tab-item');
  const tabStates = Array.from(faqTabItems).map((item) => item.classList.contains('faq__tab-item--active'));
  saveState('faqTabStates', tabStates);
};

const onFaqTabButtonClick = (evt) => {
  const buttonTarget = evt.target.closest('.faq__tab-button');

  if (!buttonTarget) {
    return;
  }

  const faqTabItem = buttonTarget.closest('.faq__tab-item');
  const faqActiveTabItem = faqTabList.querySelector('.faq__tab-item--active');
  const faqTabButton = faqActiveTabItem.querySelector('.faq__tab-button');
  if (faqActiveTabItem && faqActiveTabItem !== faqTabItem) {
    faqActiveTabItem.classList.remove('faq__tab-item--active');
    faqTabButton.classList.remove('faq__tab-button--active');
  }

  if (!faqTabItem.classList.contains('faq__tab-item--active')) {
    faqTabItem.classList.add('faq__tab-item--active');
    buttonTarget.classList.add('faq__tab-button--active');
  }
  changeFaqText(evt);
  saveTabState();
};

const loadTabState = () => {
  const tabStates = loadState('faqTabStates');
  if (tabStates) {
    const faqTabItems = document.querySelectorAll('.faq__tab-item');
    tabStates.forEach((isActive, index) => {
      if (isActive) {
        faqTabItems[index].classList.add('faq__tab-item--active');
        faqTabItems[index].querySelector('.faq__tab-button').classList.add('faq__tab-button--active');
      } else {
        faqTabItems[index].classList.remove('faq__tab-item--active');
        faqTabItems[index].querySelector('.faq__tab-button').classList.remove('faq__tab-button--active');
      }
    });
  }
};

const saveAccordionState = (tabIndex) => {
  const accordionStates = Array.from(faqItems).map((item) => Boolean(item.querySelector('p').style.height));
  saveState(`accordionStates_${tabIndex}`, accordionStates);
};

const onAccordionItemClick = (evt) => {
  const faqItem = evt.target.closest('li');
  if (faqItem) {
    const answer = faqItem.querySelector('p');
    answer.style.height = answer.style.height ? null : `${answer.scrollHeight}px`;
    const activeTabIndex = Array.from(document.querySelectorAll('.faq__tab-item')).findIndex((item) => item.classList.contains('faq__tab-item--active'));
    saveAccordionState(activeTabIndex);
  }
};

const faqTabsToggle = () => {
  if (!faqTabList) {
    return;
  }
  faqTabList.addEventListener('click', onFaqTabButtonClick);
};

const faqAccordionToggle = () => {
  if (!faqDetailsList) {
    return;
  }
  faqDetailsList.addEventListener('click', onAccordionItemClick);
};

const bootStrap = () => {
  loadTabState();
  faqTabsToggle();
  faqAccordionToggle();
};

bootStrap();
