const adForm = document.querySelector('.ad-form');
const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');
const adTypeInput = adForm.querySelector('#type');
const addressInput = document.querySelector('#address');
const adRoomsInput = adForm.querySelector('#room_number');
const adGuestsInput = adForm.querySelector('#capacity');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const submitButton = adForm.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const GUEST_RESTRICTIONS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

//const symbolsAfterPoint = 5;

const getAvailableValues = () => {
  const roomsValue = +adRoomsInput.value;
  return GUEST_RESTRICTIONS[roomsValue];
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

const setMinPrice = () => {
  const minPrice = MIN_PRICES[adTypeInput.value];
  adPriceInput.min = minPrice;
  adPriceInput.placeholder = minPrice;
};

const validatePrice = () => {
  const minPrice = MIN_PRICES[adTypeInput.value];
  const maxPrice = adPriceInput.max;
  if (+adPriceInput.value < minPrice || +adPriceInput.value > maxPrice) {
    adPriceInput.setCustomValidity(`Укажите цену от ${minPrice} до ${maxPrice}`);
  } else {
    adPriceInput.setCustomValidity('');
  }

  adPriceInput.reportValidity();
};

const setAddress = (lat, lng) => {
  addressInput.value = `${lat}, ${lng}`;
};

const disableOptions = () => {
  const availableValues = getAvailableValues();

  Array.from(adGuestsInput.options).forEach((option) => {
    if (!availableValues.includes(+option.value)) {
      option.disabled = true;
    } else {
      option.disabled = false;
    }
  });
};

disableOptions();

const validateGuestNumber = () => {
  const guestsValue = +adGuestsInput.value;
  const availableValues = getAvailableValues();

  if (availableValues.includes(guestsValue)) {
    adGuestsInput.setCustomValidity('');
  } else {
    adGuestsInput.setCustomValidity('Недопустимое количество гостей');
  }

  adGuestsInput.reportValidity();
};

const changeTimeIn = () => {
  timeOut.value = timeIn.value;
};

const changeTimeOut = () => {
  timeIn.value = timeOut.value;
};


const setResetCallback = (callback) => {
  resetButton.addEventListener('click', () => {
    callback();
  });
};


const setFormListeners = () => {
  adTitleInput.addEventListener('input', () => validateTitle());
  adPriceInput.addEventListener('input', () => validatePrice());
  adTypeInput.addEventListener('change', () => setMinPrice());
  adRoomsInput.addEventListener('change', () => disableOptions());
  timeIn.addEventListener('change', () => changeTimeIn());
  timeOut.addEventListener('change', () => changeTimeOut());

  submitButton.addEventListener('click', () => validateGuestNumber());
};


export {
  adForm,
  setAddress,
  setFormListeners,
  setResetCallback
};
