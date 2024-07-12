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
const saveState = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};
const saveTabState = () => {
  const faqTabItems = document.querySelectorAll('.faq__tab-item');
  const tabStates = Array.from(faqTabItems).map((item) => item.classList.contains('faq__tab-item--active'));
  saveState('faqTabStates', tabStates);
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

/* Ужасный блок с local Storage - сделал с помощью. */

export {loadAccordionState, loadTabState ,saveTabState, saveAccordionState};
