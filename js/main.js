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

function getInteger(min, max) {
  if (min > max || min < 0 || max < 0) {
    throw 'Диапазон должен быть положительным, включая ноль';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFractionalNumber(min, max, symbolsAfterPoint) {
  if (min > max || min < 0 || max < 0) {
    throw 'Диапазон должен быть положительным, включая ноль';
  }
  return +(Math.random() * (max - min) + min).toFixed(symbolsAfterPoint);
}

function getRandomElement(arr) {
  const randomElement = getInteger(0, arr.length - 1);
  return arr[randomElement];
}

//getInteger(5, 10);
//getFractionalNumber(2, 5, 3);
//getRandomElement([ 15, 1, 8, 46, 950, 75, 3 ]);

const avatarURL = () => {
  const numberAvatar = getInteger(1, 10);
  return (numberAvatar < 10) ? `img/avatars/user${0}${numberAvatar}.png` : `img/avatars/user${numberAvatar}.png`;
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
      price: getInteger(85, 150),
      type: getRandomElement(TYPE),
      rooms: getInteger(1, 8),
      guests: getInteger(1, 12),
      checkin: getRandomElement(CHECKIN),
      checkout: getRandomElement(CHECKOUT),
      features: getRandomElement(FEATURES),
      descripton: getRandomElement(DESCRIPTION),
      photos: getRandomElement(PHOTOS),
    },
  };
};

//const SIMILAR_AD_VARIABLES = 3;
//const similarAds = new Array(SIMILAR_AD_VARIABLES).fill('').map(() => createAd());

createAd();
//console.log(similarAds);
