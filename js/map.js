import {
  createCard
} from './card.js';

const DEFAULT_COORDINATES = {
  lat: 35.67173,
  lng: 139.7318,
};

const symbolsAfterPoint = 5;

const map = L.map('map-canvas')
  .setView({
    lat: DEFAULT_COORDINATES.lat,
    lng: DEFAULT_COORDINATES.lng,
  }, 13);

const layer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map);

const setLoadCallback = (callback) => {
  layer.on('load', () => {
    callback();
  });
};

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

const setMoveCallback = (callback) => {
  mainPinMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();
    callback(`${+(coordinates.lat).toFixed(symbolsAfterPoint)}`, `${+(coordinates.lng).toFixed(symbolsAfterPoint)}`);
  });
};

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

const addPins = (ads) => {
  ads.forEach((ad) => {
    createMarker(ad);
  });
};

const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: DEFAULT_COORDINATES.lat,
    lng: DEFAULT_COORDINATES.lng,
  });

  map.setView({
    lat: DEFAULT_COORDINATES.lat,
    lng: DEFAULT_COORDINATES.lng,
  }, 13);
};


export {
  setLoadCallback,
  setMoveCallback,
  addPins,
  resetMap
};
