const faqDetailsListContainer = document.querySelector('.faq__details-lists-container');

const faqListFirstItemFind = () => {
  const firstItem = document.querySelector('.faq__details-list li');
  if (!firstItem) {
    return;
  }
  const firstDescription = firstItem.querySelector('p');
  const marker = firstItem.querySelector('.faq__details-list-marker');
  if (firstDescription && marker.classList.contains('faq__details-list-marker--active')) {
    firstDescription.style.height = `${firstDescription.scrollHeight}px`;
  }
};

const onAccordionItemClick = (evt) => {
  const item = evt.target.closest('.faq__details-list li');
  if (!item) {
    return;
  }

  const marker = item.querySelector('.faq__details-list-marker');
  const content = item.querySelector('p');

  const isActive = marker.classList.toggle('faq__details-list-marker--active');
  content.style.height = isActive ? `${content.scrollHeight}px` : '0';

  if (isActive && window.innerWidth >= 768) {
    item.style.paddingBottom = '16px';
  } else {
    item.style.paddingBottom = '0';
  }
};

const onAccordionItemKeydown = (evt) => {
  if (evt.key === 'Enter') {
    onAccordionItemClick(evt);
  }
};

const faqAccordionToggle = () => {
  faqDetailsListContainer.addEventListener('click', onAccordionItemClick);
  faqDetailsListContainer.addEventListener('keydown', onAccordionItemKeydown);
};

faqListFirstItemFind();

export { faqAccordionToggle };
