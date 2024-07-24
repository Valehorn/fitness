const priceCardList = document.querySelector('.price__cards-list');

const onCardHover = (evt) => {
  const buttonTarget = evt.target.closest('.card__button');
  const card = buttonTarget ? buttonTarget.closest('.card') : null;

  if (card) {
    card.classList.toggle('card--hover');
  }
};

const cardHover = () => {
  priceCardList.addEventListener('mouseover', onCardHover);
  priceCardList.addEventListener('mouseout', onCardHover);
};

export { cardHover };
