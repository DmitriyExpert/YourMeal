

function updateBasket() {
  const basketWrapper = document.querySelector('.basket__wrapper')
  const mainCounterBasket = basketWrapper.querySelector('.maincounter__text')
  const counterInnerCard = basketWrapper.querySelector('.counter-managment__counter')
  const total = basketWrapper.querySelector('.total__text-price')
  const deliveryText = basketWrapper.querySelector('.delivery__text')
  

  const basketData = {
    "mainCounter": mainCounterBasket.innerText,
    "innerCounterInfo": formirateBasketListInfo(basketWrapper),
    "total": parseInt(total.innerText),
    "deliveryType": deliveryText.innerText
  }

  console.log(basketData)

  changeMainCounter(basketData)
  changeTotal(basketData)

  mainCounterBasket.innerText = basketData.mainCounter
  total.innerText = `${basketData.total}₽`
}

updateBasket()

function formirateBasketListInfo(basketWrapper) {
  const basketList = Array.from(basketWrapper.querySelectorAll('.basket__list-item'))
  const result = basketList.map((basketListItem) => {
    const cardTitle = basketListItem.querySelector('.info-card__title')
    const innerCounterValue = basketListItem.querySelector('.counter-managment__counter').value
    const priceCard = parseInt(basketListItem.querySelector('.info-card__price').innerText)
    return [cardTitle, innerCounterValue, priceCard] // ВМЕСТО cardTitle - aria atribute с id
  })
  return result
}


function changeMainCounter(basketData) {
  const cardList = basketData["innerCounterInfo"]
  let mainCounter = 0

  cardList.forEach((innerCounterInfo) => {
    mainCounter += +innerCounterInfo[1]
  })

  basketData["mainCounter"] = String(mainCounter)
  return mainCounter
}

function changeTotal(basketData) {
  let currentTotal = 0
  const cardList = basketData["innerCounterInfo"]
  cardList.forEach((innerCounterInfo) => {
    currentTotal += +innerCounterInfo[2]
  })
  basketData["total"] = currentTotal
  return currentTotal
}


function generateBasket() {

}

function deleteCard() {

}


function visualisingBasket() {
  
}

function changeDeliveryBasket() {

}