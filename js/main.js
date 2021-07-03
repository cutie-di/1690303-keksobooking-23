import {
  similarAds
} from './data.js';


import {
  createCard
} from './card.js';

//import {
//  deactivateForm,
//  activateForm
//} from './form-state.js';

/* eslint-disable-next-line no-console */
console.log(similarAds);


const map = document.querySelector('#map-canvas');
map.appendChild(createCard(similarAds[0]));

/* eslint-disable no-console */
//deactivateForm();
//activateForm();
/* eslint-enable no-console */

import {
  adForm
} from './form-state.js';

const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');
const adRoomsInput = adForm.querySelector('#room_number');
const adGuestsInput = adForm.querySelector('#capacity');

const submitButton = adForm.querySelector('.ad-form__submit');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const GUEST_RESTRICTIONS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [],
};

const validateTitle = () => {
  const valueLength = adTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Введите ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    adTitleInput.setCustomValidity('');
  }

  adTitleInput.reportValidity();
};

const validatePrice = () => {
  if (adPriceInput.value < 0) {
    adPriceInput.setAttribute('invalid', true);
    adPriceInput.setCustomValidity('Цена не может быть меньше 0');
  } else if (adPriceInput.value > 1000000) {
    adPriceInput.setAttribute('invalid', true);
    adPriceInput.setCustomValidity('Цена не может быть больше 1 000 000');
  } else {
    adPriceInput.setCustomValidity('');
  }

  adPriceInput.reportValidity();
};

const validateGuestNumber = () => {
  const roomsValue = +adRoomsInput.value;
  const guestsValue = +adGuestsInput.value;
  const availableValues = GUEST_RESTRICTIONS[roomsValue];

  Array.from(adGuestsInput.options).forEach((option) => {
    if (!availableValues.includes(option.value)) {
      option.disabled = true;
    } {
      option.disabled = false;
    }
  });

  if (availableValues.includes(guestsValue)) {
    adGuestsInput.setCustomValidity('');
  } else {
    adGuestsInput.setCustomValidity('Недопустимое количество гостей');
  }

  adGuestsInput.reportValidity();
};

const checkValidity = () => {
  adTitleInput.addEventListener('input', validateTitle);
  adPriceInput.addEventListener('input', validatePrice);
  adRoomsInput.addEventListener('change', validateGuestNumber);
  adGuestsInput.addEventListener('change', validateGuestNumber);
};

const formSubmit = (evt) => {
  if (!adForm.checkValidity()) {
    evt.preventDefault();
  }
};

checkValidity();
//formSubmit();
submitButton.addEventListener('submit', formSubmit);
