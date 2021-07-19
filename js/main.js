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
  filterAdsNumber,
  getSimilarAds,
  setFilterChange
} from './filter.js';

import {
  debounce
} from './utils/debounce.js';

const DELAY = 500;

deactivateForm();

setLoadCallback(() => {

  loadSimilarAd((data) => {
    addPins(filterAdsNumber(data));
    setFilterChange(debounce(() => getSimilarAds(data),
      DELAY,
    ));
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
