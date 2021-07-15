import {
  deactivateForm,
  activateForm
} from './form-state.js';

import {
  setLoadCallback,
  setMoveCallback,
  addPins,
  resetMap
} from './map.js';

import {
  adForm,
  setAddress,
  setResetCallback,
  setFormListeners
} from './form.js';

import {
  showSuccessMessage,
  showErrorMessage,
  showErrorLoadMessage,
  closeMessage
} from './popup.js';

import {
  loadSimilarAd,
  formSubmit
} from './server.js';

import {
  filterAds
} from './filter.js';

deactivateForm();

setLoadCallback(() => {
  loadSimilarAd(
    (data) => {
      addPins(filterAds(data));
    },
    () => {
      showErrorLoadMessage();
    },
  );
  activateForm();
});

const onSuccess = () => {
  showSuccessMessage();
  adForm.reset();
};

setResetCallback(() => resetMap());


const sendForm = () => {
  setMoveCallback((...coords) => setAddress(...coords));
  setFormListeners();
  formSubmit(adForm, onSuccess, showErrorMessage);
  closeMessage();
};

sendForm();

/* eslint-disable-next-line no-console */
//console.log(similarAds);

//const map = document.querySelector('#map-canvas');
//map.appendChild(createCard(similarAds[0]));
