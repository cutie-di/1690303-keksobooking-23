import {
  similarAds
} from './data.js';


import {
  createCard
} from './card.js';

/* eslint-disable-next-line no-console */
console.log(similarAds);


const map = document.querySelector('#map-canvas');
map.appendChild(createCard(similarAds[0]));
