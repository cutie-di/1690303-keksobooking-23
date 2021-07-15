import {
  isEscEvent
} from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const loadErrorTemplate = document.querySelector('#server-error').content.querySelector('.server-error');

let popup = null;

const closePopup = () => {
  popup.remove();
  document.removeEventListener('click', closePopup);
};

const closeOnEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
    document.removeEventListener('keydown', closeOnEsc);
  }
};

const closeErrorOnButton = () => {
  popup.querySelector('.error__button').addEventListener('click', () => {
    closePopup(popup);
    document.removeEventListener('keydown', closeOnEsc);
  });
};

const openPopup = (template) => {
  popup = template.cloneNode(true);
  if (template === errorTemplate) {
    closeErrorOnButton();
  }
  document.addEventListener('click', closePopup);
  document.addEventListener('keydown', closeOnEsc);
  document.body.append(popup);
};

const showSuccessMessage = () => openPopup(successTemplate);
const showErrorMessage = () => openPopup(errorTemplate);
const showErrorLoadMessage = () => openPopup(loadErrorTemplate);

export {
  showSuccessMessage,
  showErrorMessage,
  showErrorLoadMessage
};
