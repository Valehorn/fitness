import { faqTabs } from './const';

const faqTabList = document.querySelector('.faq__tab-list');
const faqDetailsList = document.querySelector('.faq__details-list');
const faqItems = faqDetailsList.querySelectorAll('li');

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
};


const test = () => {
  faqTabList.addEventListener('click', (evt) => {
    const faqTabButtons = document.querySelectorAll('.faq__tab-button');
    if (evt.target.classList.contains('faq__tab-button')) {
      const index = Array.from(faqTabButtons).indexOf(evt.target);
      updateFaqDetails(index);
    }
  });

  function updateFaqDetails(index) {
    faqItems.forEach((item, itemIndex) => {
      const { question, answer } = faqTabs[index][itemIndex];
      item.querySelector('h3').textContent = question;
      item.querySelector('p').textContent = answer;
    });
  }
};

const faqTabsToggle = () => {
  if (!faqTabList) {
    return;
  }
  faqTabList.addEventListener('click', onFaqTabButtonClick);
};


export { faqTabsToggle, test };
