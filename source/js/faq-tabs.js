const faqTabList = document.querySelector('.faq__tab-list');
const faqDetailsList = document.querySelectorAll('.faq__details-list');
const faqTabButtons = document.querySelectorAll('.faq__tab-button');

const faqListChange = (evt) => {
  const buttonTarget = evt.target.closest('.faq__tab-button');
  if (!buttonTarget) {
    return;
  }

  const targetFaqList = buttonTarget.dataset.faqList;

  faqTabButtons.forEach((button) => button.classList.remove('faq__tab-button--active'));
  faqDetailsList.forEach((faqList) => faqList.classList.remove('faq__details-list--active'));
  buttonTarget.classList.add('faq__tab-button--active');
  faqDetailsList.forEach((list) => {
    if (list.dataset.faqList === targetFaqList) {
      list.classList.add('faq__details-list--active');
    }
  });
};


const onFaqTabButtonClick = (evt) => {
  const buttonTarget = evt.target.closest('.faq__tab-button');

  if (!buttonTarget) {
    return;
  }

  const faqTabButtonActive = faqTabList.querySelector('.faq__tab-button--active');

  if (faqTabButtonActive) {
    faqTabButtonActive.classList.remove('faq__tab-button--active');
  }

  buttonTarget.classList.add('faq__tab-button--active');

  faqListChange(evt);
};

const faqTabsToggle = () => {
  if (!faqTabList) {
    return;
  }
  faqTabList.addEventListener('click', onFaqTabButtonClick);
};

export { faqTabsToggle };
