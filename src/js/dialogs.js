import utils from './utils/getElements'

const dialogs = document.querySelectorAll(".dialog")



function dialogsUnOpened(dialogsUnOpenedAction) {
  dialogsUnOpenedAction.forEach((dialogAction) => {
    dialogAction.addEventListener("click", function() {
      const getTypeCurrentDialog = dialogAction.getAttribute('aria-dialogtype');
      const arrayFormNodeList = Array.from(dialogs)
      const currentDialog = utils.findElementById(arrayFormNodeList, getTypeCurrentDialog)
      if(!currentDialog) {
        console.warn(`Отсутствует модальное окно ${getTypeCurrentDialog}`)
        return
      }
    currentDialog.showModal()
    })
  })
}


// Закрытие диалога
dialogs.forEach((dialog) => {
  const dialogCloseAction = dialog.querySelectorAll('.dialog__close')
    dialogCloseAction.forEach((dialogClose) => {
      dialogClose.addEventListener('click', () => {
      addingClosing(dialog)
      dialog.addEventListener("animationend", function handler(event) {
        if(event.animationName === 'reverseFadeInBackdrop') {
          dialog.close()
          deleteClosing(dialog)
          dialog.removeEventListener("animationend", handler)
        }
      })
    })
  })
})


function deleteClosing(dialog) {
  dialog.classList.remove('closing')
}

function addingClosing(dialog) {
  dialog.classList.add('closing')
}



export default dialogsUnOpened