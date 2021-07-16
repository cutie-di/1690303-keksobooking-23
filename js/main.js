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
  setFormListeners,
  setSubmitCallback
} from './form.js';

import {
  showSuccessMessage,
  showErrorMessage,
  showErrorLoadMessage
} from './popup.js';

import {
  loadSimilarAd,
  sendForm
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
setMoveCallback((...coords) => setAddress(...coords));
setFormListeners();

setSubmitCallback(() => sendForm(new FormData(adForm), onSuccess, showErrorMessage));
