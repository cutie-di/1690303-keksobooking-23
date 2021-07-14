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
  showErrorLoadingMessage
  //closeSuccessMessage,
  //closeErrorMessage
} from './popup.js';

import {
  loadSimilarAd,
  postAd
} from './server.js';

deactivateForm();

setLoadCallback(() => {
  loadSimilarAd((data) => {
    addPins(data);
  });
  activateForm();
});


setMoveCallback((...coords) => setAddress(...coords));

adForm.addEventListener('submit', (evt) => {
  setFormListeners();
  evt.preventDefault();
  postAd(
    showSuccessMessage,
    showErrorMessage,
    new FormData(evt.target),
  );
});


setResetCallback(() => resetMap());


//showSuccessMessage();
//showErrorMessage();
//closeSuccessMessage();
//closeErrorMessage();


/* eslint-disable-next-line no-console */
//console.log(similarAds);

//const map = document.querySelector('#map-canvas');
//map.appendChild(createCard(similarAds[0]));
