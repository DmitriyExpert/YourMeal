import utils from "./utils/getElements"
import data from "./data/dataset"
import dialogsUnOpened from './dialogs'
// Генерация начальных карточек
const activeBtn = document.querySelector('.category-btn.active')
const ariaActiveBtn = activeBtn.getAttribute("data-categorytype")
const categories = data.category
const category = utils.getCategoryByType(categories, ariaActiveBtn)
const categoryTypeId = category[0].id
const dishes = utils.getDishByTypeId(data.dishes, categoryTypeId)
const catalogUl = document.querySelector('#catalogList')
const catalogTitle = document.querySelector('.catalog__title')
catalogUl.innerHTML = ""
dishes.forEach((dish) => {
  const dishid = dish.dish_id
  const urlToImage = dish.urlToImage
  const price = dish.dish_price
  const dishName = dish.dish_name
  const gram = dish?.dish_parameters?.dish_gram
  if(!dishid || !urlToImage || !price || !dishName || !gram) {
    catalogTitle.innerText = 'Что пошло не так, обратитесь к администратору!'
    return console.warn("Не хватает данных для формирования карточки еды!")
  }
  const firstNodeCatalog = catalogGenerate(dishid, urlToImage, price, dishName, gram)
  catalogUl.append(firstNodeCatalog)
})

const dialogsUnOpenedAction = document.querySelectorAll(".dialog-close")
dialogsUnOpened(dialogsUnOpenedAction)


// Генерация карточек блюд по нажатию на категории

function catalogGenerate(dishid, urlToImage, price, dishName, gram) {
  const nodeCatalogClone = cloneCatalogFormirate()
  const nodeCard = nodeCatalogClone.querySelector(".card__catalog") 
  const nodeImg = nodeCatalogClone.querySelector(".card__image-catalog")
  const nodePrice = nodeCatalogClone.querySelector(".info-card__title")
  const nodeDishName = nodeCatalogClone.querySelector(".info-card__subtitle")
  const nodeDishGram = nodeCatalogClone.querySelector(".info-card__catalog-gram")
  if(!nodeCatalogClone || !nodeCard || !nodeImg || !nodePrice || !nodeDishName || !nodeDishGram) {
    return false
  }

  nodeCard.setAttribute("data-dishid", dishid)
  nodeImg.setAttribute("src", urlToImage)
  nodePrice.innerText = String(price) + "₽"
  nodeDishName.innerText = dishName
  nodeDishGram.innerText = String(gram) + "г"
  

  return nodeCatalogClone
}

function cloneCatalogFormirate() {
  const catalogTmp = document.querySelector(".catalog__generate-template")
  const nodeCatalogClone = catalogTmp.content.cloneNode(true)
  return nodeCatalogClone
}

export default catalogGenerate