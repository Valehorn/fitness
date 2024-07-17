const faqDetailsListContainer = document.querySelector('.faq__details-lists-container');

/* const changeMargin = (header, breakpoint) => {
  if (breakpoint >= 320 && breakpoint <= 767) {
    header.style.marginBottom = '20px';
  } else if (breakpoint >= 768 && breakpoint <= 1355) {
    header.style.marginBottom = '19px';
  } else if (breakpoint > 1355) {
    header.style.marginBottom = '31px';
  }
};
 */
const faqListFirstItemFind = () => {
  const firstItem = document.querySelector('.faq__details-list li');
  if (firstItem) {
    const firstDescription = firstItem.querySelector('p');
    const marker = firstItem.querySelector('.faq__details-list-marker');
    /* const header = firstItem.querySelector('h3'); */
    if (firstDescription && marker.classList.contains('faq__details-list-marker--active')) {
      firstDescription.style.height = `${firstDescription.scrollHeight}px`;
    }
    /* changeMargin(header, window.screen.width); */
  }
};

const onAccordionItemClick = (evt) => {
  const item = evt.target.closest('li');
  if (!item) {
    return;
  }

  const marker = item.querySelector('.faq__details-list-marker');
  const content = item.querySelector('p');
  /* const header = item.querySelector('h3'); */

  const isActive = marker.classList.toggle('faq__details-list-marker--active');
  content.style.height = isActive ? `${content.scrollHeight}px` : '0';

  /* if (isActive) {
    changeMargin(header, window.screen.width);
  } else {
    header.style.marginBottom = '0';
  } */
};

const onAccordionItemKeydown = (evt) => {
  if (evt.key === 'Enter') {
    onAccordionItemClick(evt);
  }
};

const faqAccordionToggle = () => {
  if (!faqDetailsListContainer) {
    return;
  }
  faqListFirstItemFind();
  faqDetailsListContainer.addEventListener('click', onAccordionItemClick);
  faqDetailsListContainer.addEventListener('keydown', onAccordionItemKeydown);
};

export { faqAccordionToggle };

