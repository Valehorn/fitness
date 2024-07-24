import { priceTabs } from './const';

const priceTabList = document.querySelector('.price__tab-list');
const tabItem = Array.from(document.querySelectorAll('.price__tab-item'));
const cardPrice = document.querySelectorAll('.card__price');

const onTabItemClick = (evt) => {
  const itemTarget = evt.target.closest('.price__tab-item');

  if (!itemTarget) {
    return;
  }

  tabItem.forEach((tab) => tab.classList.toggle('price__tab-item--active', tab === itemTarget)); //tab === itemTarget условие добавления и удаления класса

  const tabIndex = tabItem.indexOf(itemTarget);

  cardPrice.forEach((price, index) => {
    const changedPrice = priceTabs[tabIndex][`price${index + 1}`]; //получение доступа к полям объектов (price1-3)
    price.querySelector('.card__price-decoration').textContent = changedPrice;
    price.querySelector('.card__price-text').textContent = changedPrice;
  });
};

const changePriceTab = () => {
  priceTabList.addEventListener('click', onTabItemClick);
};

export { changePriceTab };
