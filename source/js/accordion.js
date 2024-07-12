import { saveAccordionState } from './local-storage';

const faqDetailsList = document.querySelector('.faq__details-list');
const faqItems = document.querySelectorAll('.faq__tab-item');

const onAccordionItemClick = (evt) => {
  const faqItem = evt.target.closest('li');
  if (faqItem) {
    const answer = faqItem.querySelector('p');
    answer.style.height = answer.style.height ? null : `${answer.scrollHeight}px`;
    const activeTabIndex = Array.from(faqItems).findIndex((item) => item.classList.contains('faq__tab-item--active'));
    saveAccordionState(activeTabIndex);
  }
};

const faqAccordionToggle = () => {
  if (!faqDetailsList) {
    return;
  }
  faqDetailsList.addEventListener('click', onAccordionItemClick);
};

export { faqAccordionToggle };
