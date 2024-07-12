const faqDetailsList = document.querySelector('.faq__details-list');

const onAccordionItemClick = (evt) => {

  const faqItem = evt.target.closest('li');
  if (faqItem) {
    const answer = faqItem.querySelector('p');
    answer.style.height = answer.style.height ? null : `${answer.scrollHeight}px`;
  }
};

const faqAccordionToggle = () => {
  if (!faqDetailsList) {
    return;
  }
  faqDetailsList.addEventListener('click', onAccordionItemClick);
};

export { faqAccordionToggle };
