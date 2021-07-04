const adForm = document.querySelector('.ad-form');
const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');
const adRoomsInput = adForm.querySelector('#room_number');
const adGuestsInput = adForm.querySelector('#capacity');

const submitButton = adForm.querySelector('.ad-form__submit');
//const resetButton = adForm.querySelector('.ad-form__reset');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const GUEST_RESTRICTIONS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

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

const validatePrice = () => {
  if (+adPriceInput.value < 0) {
    adPriceInput.setCustomValidity('Цена не может быть меньше 0');
  } else if (+adPriceInput.value > 1000000) {
    adPriceInput.setCustomValidity('Цена не может быть больше 1 000 000');
  } else {
    adPriceInput.setCustomValidity('');
  }

  adPriceInput.reportValidity();
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

const setFormListeners = () => {
  adTitleInput.addEventListener('input', validateTitle);
  adPriceInput.addEventListener('input', validatePrice);
  adRoomsInput.addEventListener('change', disableOptions);

  submitButton.addEventListener('click', validateGuestNumber);
};

export {
  adForm,
  setFormListeners
};
