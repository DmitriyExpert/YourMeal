import data from './data/dataset';
import utils from './utils/getElements';
import {dialogClose} from './dialogs'

function getDishCard() {
  return new Promise((resolve) => {
    const cardsCatalogs = document.querySelectorAll('.card__catalog');
    cardsCatalogs.forEach((card) => {
      const actions = card.querySelectorAll('.card__top');
      actions.forEach((action) => {
        const clickHandler = () => {
          resolve(card);
          action.removeEventListener('click', clickHandler);
        };
        action.addEventListener('click', clickHandler);
      });
    });
  });
}

async function getDataAboutCard() {
  while (true) {
    const card = await getDishCard();
    const dishId = card.getAttribute('data-dishid');
    const dishData = data.dishes;
    const dishDataFiltred = utils.findDishById(dishData, +dishId);
    return dishDataFiltred;
  }
}

async function generateDialogDescription() {
  while (true) {
    const dishFiltred = await getDataAboutCard();
    const dialog = document.querySelector('#descriptionItem');
    dialog.innerHTML = ""
    const descriptionTmp = document.querySelector('.description__generate-template');

    const nodeCloneDescription = descriptionTmp.content.cloneNode(true);
    const descriptionItemTitle = nodeCloneDescription.querySelector('.description-item__title');
    const descriptionItemImages = nodeCloneDescription.querySelector('.description-item__images');
    const descriptionItemSubtitle = nodeCloneDescription.querySelector('.description-item__subtitle');
    const structureGramInfo = nodeCloneDescription.querySelector('.structure__gram');
    const price = nodeCloneDescription.querySelector('.descrip-managment__price');

    if (descriptionItemTitle) {
      descriptionItemTitle.textContent = dishFiltred.dish_name;
    }
    if (descriptionItemImages) {
      descriptionItemImages.setAttribute('src', dishFiltred.urlToImage);
    }
    if (descriptionItemSubtitle) {
      descriptionItemSubtitle.textContent = dishFiltred.dish_description;
    }
    if (structureGramInfo) {
      structureGramInfo.textContent = `${dishFiltred.dish_parameters?.dish_gram}г, ккал ${dishFiltred.dish_parameters?.dish_kkal}`;
    }
    if (price) {
      price.textContent = `${dishFiltred.dish_price}₽`;
    }
    generteStructureList(dishFiltred, nodeCloneDescription)
    dialog.append(nodeCloneDescription);
    dialogClose()
  }
}

async function generteStructureList(dishFiltred, nodeCloneDescription) {

  const structureListWrapper = nodeCloneDescription.querySelector('.structure__list')
  const structureInfo = dishFiltred.dish_structure.split(', ')
  const structureTmp = document.querySelector('.structure__generate-template')
  structureListWrapper.innerHTML = ''

  structureInfo.forEach((info) => {
    const structureNode = structureTmp.content.cloneNode(true)
    const structureLi = structureNode.querySelector('.structure__list-item')
    structureLi.innerText = info
    structureListWrapper.append(structureLi)
  })
}


export default generateDialogDescription