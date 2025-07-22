import data from './data/dataset';
import utils from './utils/getElements';
import { detectDeviceType } from './utils/typeDeviceDetector';

function updateBasket() {
  const basketWrapper = document.querySelector('.basket__wrapper');
  const basketList = document.querySelector('.basket__list')
  const mainCounterBasket = basketWrapper.querySelector('.maincounter__text');
  const total = basketWrapper.querySelector('.total__text-price');
  const deliveryText = basketWrapper.querySelector('.delivery__text');
  const deviceType = detectDeviceType()
  const basketData = {
    mainCounter: mainCounterBasket.innerText,
    innerCardInfo: formirateBasketListInfo(basketWrapper),
    total: parseInt(total.innerText),
    deliveryType: deliveryText.innerText,
  };
  console.log(deviceType)
  changeMainCounter(basketData);
  changeTotal(basketData);
  changeTypeDelivery(basketData);
  toggleEmptyMess(basketList)
  
  if(deviceType === "mobile" || deviceType === "laptop") {
    mobileDisplayBasket()
  } else {
    desctopDisplayBasket()
  }

  

  mainCounterBasket.innerText = basketData.mainCounter;
  total.innerText = `${basketData.total}₽`;
  deliveryText.innerText = basketData.deliveryType;
}


function toggleEmptyMess(basketList) {
  const emptyMes = document.querySelector('.basket__empty')
  if(basketList.children.length > 0) {
    return emptyMes.classList.add('d-n')
  }
  else {
    return emptyMes.classList.remove('d-n')
  }  
}


function desctopDisplayBasket() {
  const basketListItems = document.querySelectorAll('.basket__list-item')
  const catalogContent = document.querySelector('.catalog__content')
  const listLength = basketListItems.length
  if(listLength > 0) {
    catalogContent.classList.remove('d-n')
  } else {
    catalogContent.classList.add('d-n')
  }
}

function mobileDisplayBasket() {
  
}

function formirateBasketListInfo(basketWrapper) {
  const basketList = Array.from(basketWrapper.querySelectorAll('.basket__list-item'));
  const result = basketList.map((basketListItem) => {
    const innerCounterValue = basketListItem.querySelector('.counter-managment__counter').value;
    const priceCard = parseInt(basketListItem.querySelector('.info-card__price').innerText);
    const dataDishId = basketListItem.querySelector('.card__basket').getAttribute('data-dishid');
    return [dataDishId, innerCounterValue, priceCard];
  });
  return result;
}

function changeMainCounter(basketData) {
  const cardList = basketData.innerCardInfo;
  let mainCounter = 0;

  cardList.forEach((innerCardInfo) => {
    mainCounter += +innerCardInfo[1];
  });

  basketData.mainCounter = String(mainCounter);
  return mainCounter;
}

function changeTotal(basketData) {
  let currentTotal = 0;
  const cardList = basketData.innerCardInfo;
  cardList.forEach((innerCardInfo) => {
    currentTotal += +innerCardInfo[2] * innerCardInfo[1];
  });
  basketData.total = currentTotal;
  return currentTotal;
}

function changeTypeDelivery(basketData) {
  const total = basketData.total;
  if (total >= 899) {
    basketData.deliveryType = 'Бесплатная доставка';
  } else {
    basketData.deliveryType = 'Платная доставка';
  }
  return basketData.deliveryType;
}

document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('count-btn-plus')) {
    const plus = event.target;
    const counterManagment = plus.closest('.counter-managment');
    const counterInner = counterManagment.querySelector('.counter-managment__counter');
    if (counterInner.value < 50) {
      counterInner.value = String(parseInt(counterInner.value, 10) + 1);
    }
    updateBasket();
  }
});

document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('count-btn-minus')) {
    const minus = event.target;
    const counterManagment = minus.closest('.counter-managment');
    const counterInner = counterManagment.querySelector('.counter-managment__counter');
    if (parseInt(counterInner.value, 10) === 1) {
      const listItem = counterManagment.closest('.basket__list-item');
      if (listItem) {
        listItem.remove();
      }
    } else {
      counterInner.value = String(parseInt(counterInner.value, 10) - 1);
    }
    updateBasket();
  }
});

document.body.addEventListener('input', (event) => {
  if (event.target.classList.contains('counter-managment__counter')) {
    const inputElement = event.target;
    let newValue = parseInt(inputElement.value, 10);
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    } else if (newValue > 50) {
      newValue = 50;
    }
    inputElement.value = String(newValue);
    updateBasket();
  }
});

function generateCardInBasket(dishId) {
  const dishes = data.dishes;
  const dishesFiltred = utils.findDishById(dishes, +dishId);
  const basketCardTmp = document.querySelector('.basket__generate-template');
  const basketContainer = document.querySelector('.basket__list');
  const basketIdContainerCards = Array.from(basketContainer.querySelectorAll('.card')).map((card) => [
    card.getAttribute('data-dishid'),
  ]);
  const findRepeatId = basketIdContainerCards.find((id) => +id === +dishesFiltred.dish_id);
  if (typeof findRepeatId !== 'undefined' && findRepeatId.length > 0) {
    return;
  }

  const basketCardClone = basketCardTmp.content.cloneNode(true);
  const cardBasket = basketCardClone.querySelector('.card__basket');
  const cardImg = basketCardClone.querySelector('.card__image');
  const infoCardTitle = basketCardClone.querySelector('.info-card__title');
  const infoCardGram = basketCardClone.querySelector('.info-card__gram');
  const infoCardPrice = basketCardClone.querySelector('.info-card__price');

  cardBasket.setAttribute('data-dishid', dishesFiltred.dish_id);
  cardImg.setAttribute('src', dishesFiltred.urlToImage);
  infoCardTitle.innerText = dishesFiltred.dish_name;
  infoCardGram.innerText = `${dishesFiltred.dish_parameters?.dish_gram || 'Сытный'}г`;
  infoCardPrice.innerText = `${dishesFiltred.dish_price || 'Не известно'}₽`;

  basketContainer.append(basketCardClone);
  updateBasket();
}

export function addBtnsClicks() {
  const addingBtns = document.querySelectorAll('.adding-btn');
  addingBtns.forEach((addingBtn) => {
    addingBtn.addEventListener('click', () => {
      const addingBtnParrentCard = addingBtn.closest('.catalog__list-item');
      const innerCardDishId =
        addingBtnParrentCard?.querySelector('.card').getAttribute('data-dishid') ||
        addingBtn.getAttribute('data-dishid');
      generateCardInBasket(innerCardDishId);
    });
  });
}

updateBasket()