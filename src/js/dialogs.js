import utils from './utils/getElements';

const dialogs = document.querySelectorAll('.dialog');

export function dialogsUnOpened(dialogsUnOpenedAction) {
  dialogsUnOpenedAction.forEach((dialogAction) => {
    dialogAction.addEventListener('click', function () {
      const getTypeCurrentDialog = dialogAction.getAttribute('aria-dialogtype');
      const arrayFormNodeList = Array.from(dialogs);
      const currentDialog = utils.findElementById(arrayFormNodeList, getTypeCurrentDialog);

      if (!currentDialog) {
        console.warn(`Отсутствует модальное окно ${getTypeCurrentDialog}`);
        return;
      }
      currentDialog.showModal();
    });
  });
  dialogClose()
}

// Закрытие диалога
export function dialogClose() {
  dialogs.forEach((dialog) => {
    const dialogCloseAction = dialog.querySelectorAll('.dialog__close');
    dialogCloseAction.forEach((dialogClose) => {
      dialogClose.addEventListener('click', () => {
        console.log(dialogClose)
        addingClosing(dialog);
        dialog.addEventListener('animationend', function handler(event) {
          if (event.animationName === 'reverseFadeInBackdrop') {
            dialog.close();
            deleteClosing(dialog);
            dialog.removeEventListener('animationend', handler);
          }
        });
      });
    });
  });
}

function deleteClosing(dialog) {
  dialog.classList.remove('closing');
}

function addingClosing(dialog) {
  dialog.classList.add('closing');
}

export default {dialogsUnOpened, dialogClose};

