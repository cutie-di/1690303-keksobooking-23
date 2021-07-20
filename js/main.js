import {
  deactivateForm,
  activateForm
} from './form-state.js';

import {
  setLoadCallback,
  setMoveCallback,
  addPins,
  resetMap,
  clearPins
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
  filterAdsNumber,
  getFiltredAds,
  setFilterChangeCallback
} from './filter.js';

import {
  debounce
} from './utils.js';

deactivateForm();

setLoadCallback(() => {

  loadSimilarAd((data) => {
    addPins(filterAdsNumber(data));

    const delay = debounce(() => {
      clearPins();
      addPins(getFiltredAds(data));
    });
    setFilterChangeCallback(delay);

    activateForm();
  },
  () => {
    showErrorLoadMessage();
  },
  );
});

const onSuccess = () => {
  showSuccessMessage();
  adForm.reset();
};

setResetCallback(() => resetMap());
setMoveCallback((...coords) => setAddress(...coords));
setFormListeners();

setSubmitCallback(() => sendForm(new FormData(adForm), onSuccess, showErrorMessage));
