import data from './data/dataset';

const categoryBtn = document.querySelectorAll('.category-btn');

const activateButton = function(button) {
  button.classList.add('active');
}

const disactivateButton = function(button) {
  button.classList.remove('active');
}

categoryBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const activeBtn = document.querySelector('.category-btn.active');
    if(activeBtn) {
      disactivateButton(activeBtn)
    }
    activateButton(button)
  })
})
console.log(data.dishes)