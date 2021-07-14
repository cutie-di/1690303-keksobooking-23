import {
  isEscEvent
} from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const loadingErrorTemplate = document.querySelector('#server-error').content.querySelector('.server-error');
const errorButton = errorTemplate.querySelector('.error__button');

const successPopup = successTemplate.cloneNode(true);
const errorPopup = errorTemplate.cloneNode(true);
const loadingErrorPopup = loadingErrorTemplate.cloneNode(true);

const openPopup = (popup) => {
  document.body.append(popup);
};

const closePopup = (popup) => {
  popup.remove();
};

const closeOnClick = (evt) => {
  evt.addEventListener('click', () => {
    closePopup(evt);
  });
};

const closeOnEsc = (evt, popup) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup(popup);
  }
};

const closeErrorOnButton = (popup) => {
  errorButton.addEventListener('click', () => {
    closePopup(popup);
  });
};

const showSuccessMessage = () => openPopup(successPopup);
const showErrorMessage = () => openPopup(errorPopup);
const showErrorLoadingMessage = () => openPopup(loadingErrorPopup);

const closeSuccessMessage = () => {
  closeOnClick(successPopup);
  closeOnEsc(successPopup);
};

const closeErrorMessage = () => {
  closeOnClick(errorPopup);
  closeOnEsc(errorPopup);
  closeErrorOnButton(errorPopup);
};

export {
  showSuccessMessage,
  showErrorMessage,
  showErrorLoadingMessage,
  closeSuccessMessage,
  closeErrorMessage
};