const faqDetailsList = document.querySelector('.faq__details-list');
const faqTabItems = document.querySelectorAll('.faq__tab-item');
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
  const tabStates = Array.from(faqTabItems).map((item) => item.classList.contains('faq__tab-item--active'));
  saveState('faqTabStates', tabStates);
};

const loadTabState = () => {
  const tabStates = loadState('faqTabStates');
  if (tabStates) {
    tabStates.forEach((isActive, index) => {
      if (isActive) {
        faqTabItems[index].classList.add('faq__tab-item--active');
        faqTabItems[index].querySelector('.faq__tab-button').classList.add('faq__tab-button--active');
      } else {
        faqTabItems[index].classList.remove('faq__tab-item--active');
        faqTabItems[index].querySelector('.faq__tab-button').classList.remove('faq__tab-button--active');
      }
    });
  } else {
    // Открываем первый таб и первый элемент списка по умолчанию
    const firstTabItem = faqTabItems[0];
    firstTabItem.classList.add('faq__tab-item--active');
    firstTabItem.querySelector('.faq__tab-button').classList.add('faq__tab-button--active');
  }

  // Открываем первый элемент списка по умолчанию
  const firstFaqItem = faqItems[0];
  firstFaqItem.querySelector('p').style.height = `${firstFaqItem.querySelector('p').scrollHeight}px`;
};


const saveAccordionState = (tabIndex) => {
  const accordionStates = Array.from(faqItems).map((item) => Boolean(item.querySelector('p').style.height));
  saveState(`accordionStates_${tabIndex}`, accordionStates);
};

/* Ужасный блок с local Storage - сделал с помощью. */

export {loadAccordionState, loadTabState ,saveTabState, saveAccordionState};
