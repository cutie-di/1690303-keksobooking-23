import {
  deactivateForm,
  activateForm,
  resetForm
} from './form-state.js';

import {
  DEFAULT_COORDINATES,
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
  loadSimilarAds,
  sendForm
} from './server.js';

import {
  filterForm,
  filterAdsNumber,
  getFilteredAds,
  setFilterChangeCallback
} from './filter.js';

import {
  debounce
} from './utils.js';

deactivateForm();

setLoadCallback(() => {
  setAddress(DEFAULT_COORDINATES.lat, DEFAULT_COORDINATES.lng);

  loadSimilarAds((data) => {
    addPins(filterAdsNumber(data));

    const delay = debounce(() => {
      clearPins();
      addPins(getFilteredAds(data));
    });
    setFilterChangeCallback(delay);

    activateForm();
  },
  () => {
    showErrorLoadMessage();
  },
  );
});

const resetPage = () => {
  resetForm(adForm, filterForm);
  resetMap();
  setAddress(DEFAULT_COORDINATES.lat, DEFAULT_COORDINATES.lng);
  loadSimilarAds((data) => addPins(filterAdsNumber(data)));
};

const onSuccess = () => {
  showSuccessMessage();
  resetPage();
};

setResetCallback(() => {
  resetPage();
});

setMoveCallback((...coords) => setAddress(...coords));
setFormListeners();

setSubmitCallback(() => sendForm(new FormData(adForm), onSuccess, showErrorMessage));
