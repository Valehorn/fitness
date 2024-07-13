import { priceTabs } from './const';

const priceTabList = document.querySelector('.price__tab-list');
const tabItem = Array.from(document.querySelectorAll('.price__tab-item'));
const cards = document.querySelectorAll('.card__price');


const onTabItemClick = (evt) => {
  const itemTarget = evt.target;

  if (!itemTarget.classList.contains('price__tab-item')) {
    return;
  }

  tabItem.forEach((tab) => tab.classList.toggle('price__tab-item--active', tab === itemTarget));

  const tabIndex = tabItem.indexOf(itemTarget);

  cards.forEach((price, index) => {
    const newPrice = priceTabs[tabIndex][`price${index + 1}`]; //получение доступа к полям объекта (price1-3)
    price.querySelector('.card__price-decoration').textContent = newPrice;
    price.querySelector('.card__price-text').textContent = newPrice;
  });
};

const changePriceTab = () => {
  if(!priceTabList) {
    return;
  }
  priceTabList.addEventListener('click', onTabItemClick);
};

export { changePriceTab };


