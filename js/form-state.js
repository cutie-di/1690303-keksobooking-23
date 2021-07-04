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
    fieldset.setAttribute('disabled', true);
  }
  adFormHeader.setAttribute('disabled', true);

  mapForm.classList.add('.map__filters--disabled');
  for (const filter of mapFilter) {
    filter.setAttribute('disabled', true);
  }
  mapFeatures.setAttribute('disabled', true);
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  for (const fieldset of adFormElements) {
    fieldset.removeAttribute('disabled');
  }
  adFormHeader.removeAttribute('disabled');

  mapForm.classList.remove('.map__filters--disabled');
  for (const filter of mapFilter) {
    filter.removeAttribute('disabled');
  }
  mapFeatures.removeAttribute('disabled');
};


export {
  deactivateForm,
  activateForm
};

//deactivateForm();
//activateForm();
