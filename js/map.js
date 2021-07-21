import {
  createCard
} from './card.js';

const symbolsAfterPoint = 5;
const MAP_SCALE = 13;
const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCOR = [26, 52];
const COMMON_ICON_SIZE = [40, 40];
const COMMON_ICON_ANCHOR = [20, 40];

const DEFAULT_COORDINATES = {
  lat: 35.67173,
  lng: 139.7318,
};

const map =
L.map('map-canvas')
  .setView({
    lat: DEFAULT_COORDINATES.lat,
    lng: DEFAULT_COORDINATES.lng,
  }, MAP_SCALE);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map);

const setLoadCallback = (callback) => {
  map.whenReady(() => {
    callback();
  });
};

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_ANCOR,
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
    iconSize: COMMON_ICON_SIZE,
    iconAnchor: COMMON_ICON_ANCHOR,
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
  },  MAP_SCALE);
};

const clearPins = () => pinsGroup.clearLayers();

export {
  DEFAULT_COORDINATES,
  setLoadCallback,
  setMoveCallback,
  addPins,
  resetMap,
  clearPins
};
