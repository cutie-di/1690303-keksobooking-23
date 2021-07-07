import {
  deactivateForm
} from './form-state.js';

import {
  createMarker,
  getAdress,
  resetForm
} from './map.js';

import {
  setFormListeners
} from './form.js';

deactivateForm();

createMarker();

getAdress();

setFormListeners();

resetForm();


/* eslint-disable-next-line no-console */
//console.log(similarAds);

//const map = document.querySelector('#map-canvas');
//map.appendChild(createCard(similarAds[0]));
