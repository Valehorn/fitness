
const faqTabList = document.querySelector('.faq__tab-list');

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

const faqTabsToggle = () => {
  if (!faqTabList) {
    return;
  }
  faqTabList.addEventListener('click', onFaqTabButtonClick);
};

export { faqTabsToggle };
