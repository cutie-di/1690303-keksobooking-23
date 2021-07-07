import {
  deactivateForm,
  activateForm
} from './form-state.js';

//import {
//  setFormListeners
//} from './form.js';

deactivateForm();

//setFormListeners();

import {
  similarAds
} from './data.js';

import {
  createCard
} from './card.js';


/* eslint-disable-next-line no-console */
//console.log(similarAds);

//const map = document.querySelector('#map-canvas');
//map.appendChild(createCard(similarAds[0]));

const DEFAULT_COORDINATES = {
  lat: 35.6895,
  lng: 139.69171,
};

const addressInput = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

const symbolsAfterPoint = 5;

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    addressInput.value = `${+(DEFAULT_COORDINATES.lat).toFixed(symbolsAfterPoint)}, ${+(DEFAULT_COORDINATES.lng).toFixed(symbolsAfterPoint)},`;
  })
  .setView({
    lat: DEFAULT_COORDINATES.lat,
    lng: DEFAULT_COORDINATES.lng,
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker({
  lat: DEFAULT_COORDINATES.lat,
  lng: DEFAULT_COORDINATES.lng,
}, {
  draggable: true,
  icon: mainPinIcon,
});

mainPinMarker.addTo(map);

const getAdress = () => {
  mainPinMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();
    addressInput.value = `${+(coordinates.lat).toFixed(symbolsAfterPoint)}, ${+(coordinates.lng).toFixed(symbolsAfterPoint)}`;
  });
};

/* eslint-disable-next-line no-console */
getAdress();

const pinsGroup = L.layerGroup().addTo(map);

const createMarker = (data) => {
  const lat = data.location.lat;
  const lng = data.location.lng;

  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const pinMarker = L.marker({
    lat,
    lng,
  }, {
    pinIcon,
  });

  pinMarker
    .addTo(pinsGroup)
    .bindPopup(
      createCard(data), {
        keepInView: true,
      },
    );
};

similarAds.forEach((point) => {
  createMarker(point);
});

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: DEFAULT_COORDINATES.lat,
    lng: DEFAULT_COORDINATES.lng,
  });

  map.setView({
    lat: DEFAULT_COORDINATES.lat,
    lng: DEFAULT_COORDINATES.lng,
  }, 15);
});
