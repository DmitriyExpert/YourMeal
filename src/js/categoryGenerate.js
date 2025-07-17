import data from './data/dataset';



const categories = data.category;
const categoryTmp = document.querySelector('.category__generate-template');
const categoryList = document.querySelector('#categoryList');
const categoryFragment = document.createDocumentFragment();
const sectionCategory = document.querySelector('.category');

if (categories.length === 0) {
  const message = 'Нет данных! Категории не сформированы!';
  console.warn(message);
  checkCategorySection(sectionCategory);
} else if (!categoryTmp) {
  const message = 'Нет template на странице! Категории не сформированы!';
  console.warn(message);
  checkCategorySection(sectionCategory);
} else if (!categoryList) {
  const message = 'Нет контейнера для категорий! Категории не сформированы!';
  console.warn(message);
  checkCategorySection(sectionCategory);
} else {
  generateCategories();
  
}



function checkCategorySection(sectionCategory) {
  if (sectionCategory) {
    return sectionCategory.remove();
  } else {
    return console.warn('Не найден элемент .category для удаления!');
  }
}

// Генерация категорий на основе template
function generateCategories() {
  categories.forEach(({ category_name, category_type, urlToIcon }, index) => {
    if (!category_name) {
      console.warn('Отсутствует category_name для категории! Кнопка не была сформирована!');
      return;
    }
    if (!category_type) {
      console.warn('Отсутствует category_type для категории! Кнопка не была сформирована!');
      return;
    }
    if (!urlToIcon) {
      console.warn('Отсутствует urlToIcon для категории! Кнопка не была сформирована!');
      return;
    }

    const nodeClone = categoryTmp.content.cloneNode(true);
    const nodeBtn = nodeClone.querySelector('.category-btn');
    const nodeSpan = nodeClone.querySelector('span');
    const nodeImg = nodeClone.querySelector('img');

    if (index === 0) {
      nodeBtn.classList.add('active');
    }

    nodeBtn.setAttribute('data-categorytype', category_type);
    nodeSpan.textContent = category_name;
    nodeImg.setAttribute('src', urlToIcon);
    categoryFragment.append(nodeClone);
  });
  
  categoryList.append(categoryFragment);
  
}
