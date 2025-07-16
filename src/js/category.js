import data from './data/dataset'
import utils from './utils/getElements'
import catalogGenerate from './catalogGenerate'
import {dialogsUnOpened} from './dialogs'
import generateDialogDescription from './descriptionGenerate'

const categoryBtn = document.querySelectorAll('.category-btn')
const catalogUl = document.querySelector('#catalogList')


// Обработка нажатия на кнопку

categoryBtn.forEach((button) => {
  button.addEventListener('click', () => {
    let activeBtn = document.querySelector('.category-btn.active')
    if(activeBtn) {
      disactivateButton(activeBtn)
    }
    activateButton(button)

    const dataCategories = data.category

    if(!dataCategories) {
      return console.warn("Не найдены данные о категориях!")
    }

    const getCategoryType = button.getAttribute("data-categorytype")
    const filterCategory = utils.getCategoryByType(dataCategories, getCategoryType)

    if(!filterCategory) {
      return console.log("Не найдена категория по заданному типу!")
    }

    const currentCategoryId = filterCategory[0].id
    const currentCategoryName = filterCategory[0].category_name 

    if (!currentCategoryId || !currentCategoryName) {
      return console.warn("Чего то не хватает в данных!")
    }

    const dishes = data.dishes
    const dishesFilter = utils.getDishByTypeId(dishes, currentCategoryId)
    const catalogTitle = document.querySelector('.catalog__title')
    catalogUl.innerHTML = ""
    changeCatalogTitle(currentCategoryName)
    dishesFilter.forEach((dish) => {
      const dishId = dish.dish_id
      const urlToImage = dish.urlToImage
      const price = dish.dish_price
      const dishName = dish.dish_name
      const gram = dish?.dish_parameters?.dish_gram
      if(!dishId || !urlToImage || !price || !dishName || !gram) {
        catalogTitle.innerText = 'Что пошло не так, обратитесь к администратору!'
        return console.warn("Не хватает данных для формирования карточки еды!")
      }
      
      const generatedDishCard = catalogGenerate(dishId, urlToImage, price, dishName, gram)
      if(generatedDishCard === false) {
        console.warn("Ошибка при получении полей для данных! Перепроверьте html разметку!")  
      }

      catalogUl.append(generatedDishCard)
    })
    const dialogsUnOpenedAction = document.querySelectorAll(".dialog-close")
    generateDialogDescription();
    dialogsUnOpened(dialogsUnOpenedAction) // Открытие нужного диалога 
  })
})



function changeCatalogTitle(categoryName) {
  const catalogTitle = document.querySelector(".catalog__title")
  catalogTitle.innerText = categoryName
  return
}


function activateButton(button) {
  button.classList.add('active');
}

function disactivateButton(button) {
  button.classList.remove('active');
}

