import {
  getInteger,
  getFractionalNumber,
  getRandomElement
} from './utils.js';

const TITLES = ['Квартира в центре города', 'Домик у моря', 'Вилла у виноградников', 'Особняк рядом с фермой', 'Коттедж у озера'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Комфортабельная квартира в центре города для тех, кто собирается устроить тур по музеям, театрам и другим достопримечательностям города', 'Уютный домик на берегу моря с прекрасным видом для тех, кто любит загорать и делать фото с закатом', 'Чудесная вилла вблизи местных виноградников для ценителей сладкого и полусладкого и поиска истины', 'Милый особняк для тех, кто мечтал научиться ездить верхом или повысить навык', 'Загородный коттедж для тех, кому нравится деревенское звездное небо и рыбалка'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const LNG_X_FIRST = 35.65000;
const LNG_X_LAST = 35.70000;
const LAT_Y_FIRST = 139.70000;
const LAT_Y_LAST = 139.80000;

const ROOMS = {
  min: 1,
  max: 12,
};

const GUESTS = {
  min: 1,
  max: 15,
};

const PRICE = {
  min: 120,
  max: 700,
};

const HOUSING_TYPE = {
  'flat': 'Квартира',
  'palace': 'Дворец',
  'bungalo': 'Бунгало',
  'house': 'Дом',
  'hotel': 'Отель',
};

const avatarURL = () => {
  const numberAvatar = getInteger(1, 10);
  //  return (numberAvatar < 10) ? `img/avatars/user${0}${numberAvatar}.png` : `img/avatars/user${numberAvatar}.png`;
  return `img/avatars/user${numberAvatar < 10 ? 0 : ''}${numberAvatar}.png`;
};

const createAd = () => {
  const LNG_X = getFractionalNumber(LNG_X_FIRST, LNG_X_LAST, 5);
  const LAT_Y = getFractionalNumber(LAT_Y_FIRST, LAT_Y_LAST, 5);
  return {
    author: {
      avatar: avatarURL(),
    },
    location: {
      lng: LNG_X,
      lat: LAT_Y,
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${LNG_X}, ${LAT_Y}`,
      price: getInteger(PRICE.min, PRICE.max),
      type: getRandomElement(TYPE),
      rooms: getInteger(ROOMS.min, ROOMS.max),
      guests: getInteger(GUESTS.min, GUESTS.max),
      checkin: getRandomElement(CHECKIN),
      checkout: getRandomElement(CHECKOUT),
      features: getRandomElement(FEATURES),
      descripton: getRandomElement(DESCRIPTION),
      photos: getRandomElement(PHOTOS),
    },
  };
};

const newCardData = createAd();

const SIMILAR_AD_VARIABLES = 6;
const similarAds = new Array(SIMILAR_AD_VARIABLES).fill('').map(() => createAd());

export {
  similarAds,
  newCardData
};

export {
  HOUSING_TYPE
};

/* eslint-disable no-console */
//createAd();
//console.log(similarAds);
/* eslint-enable no-console */
