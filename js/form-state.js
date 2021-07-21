import {
  adForm
} from './form.js';

const adFormElements = adForm.querySelectorAll('.ad-form__element');
const adFormHeader = adForm.querySelector('.ad-form-header');
const mapForm = document.querySelector('.map__filters');
const mapFilter = mapForm.querySelectorAll('.map__filter');
const mapFeatures = mapForm.querySelector('.map__features');

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  for (const fieldset of adFormElements) {
    fieldset.disabled = true;
  }
  adFormHeader.disabled = true;

  mapForm.classList.add('.map__filters--disabled');
  for (const filter of mapFilter) {
    filter.disabled = true;
  }
  mapFeatures.disabled = true;
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  for (const fieldset of adFormElements) {
    fieldset.disabled = false;
  }
  adFormHeader.disabled = false;

  mapForm.classList.remove('.map__filters--disabled');
  for (const filter of mapFilter) {
    filter.disabled = false;
  }
  mapFeatures.disabled = false;
};

const resetAdForm = () => {
  adForm.reset();
};

export {
  deactivateForm,
  activateForm,
  resetAdForm
};
