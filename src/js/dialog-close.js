const dialogs = document.querySelectorAll(".dialog");
dialogs.forEach((dialog) => {
  const dialogCloseAction = dialog.querySelector('.dialog__close')
  dialogCloseAction.addEventListener('click', () => {
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

function deleteClosing(dialog) {
  dialog.classList.remove('closing')
}

function addingClosing(dialog) {
  dialog.classList.add('closing')
}



