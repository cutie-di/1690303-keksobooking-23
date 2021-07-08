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
  setAddress,
  setResetCallback,
  setFormListeners
} from './form.js';

import {
  similarAds
} from './data.js';


deactivateForm();

setLoadCallback(() => {
  addPins(similarAds);

  activateForm();
});


setMoveCallback((...coords) => setAddress(...coords));

setFormListeners();

setResetCallback(() => resetMap());

/* eslint-disable-next-line no-console */
//console.log(similarAds);

//const map = document.querySelector('#map-canvas');
//map.appendChild(createCard(similarAds[0]));
