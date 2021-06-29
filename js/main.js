import {
  similarAds
} from './data.js';


import {
  createCard
} from './card.js';

//import {
//  deactivateForm,
//  activateForm
//} from './form-state.js';

/* eslint-disable-next-line no-console */
console.log(similarAds);


const map = document.querySelector('#map-canvas');
map.appendChild(createCard(similarAds[0]));

/* eslint-disable no-console */
//deactivateForm();
//activateForm();
/* eslint-enable no-console */
