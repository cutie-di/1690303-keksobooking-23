const TITLES = [ 'Квартира в центре города', 'Домик у моря', 'Вилла у виноградников', 'Особняк рядом с фермой', 'Коттедж у озера' ];
const TYPE = [ 'palace', 'flat', 'house', 'bungalow', 'hotel' ];
const CHECKIN = [ '12:00', '13:00', '14:00' ];
const CHECKOUT = [ '12:00', '13:00', '14:00' ];
const FEATURES = [ 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner' ];
const DESCRIPTION = [ 'Комфортабельная квартира в центре города для тех, кто собирается устроить тур по музеям, театрам и другим достопримечательностям города', 'Уютный домик на берегу моря с прекрасным видом для тех, кто любит загорать и делать фото с закатом', 'Чудесная вилла вблизи местных виноградников для ценителей сладкого и полусладкого и поиска истины', 'Милый особняк для тех, кто мечтал научиться ездить верхом или повысить навык', 'Загородный коттедж для тех, кому нравится деревенское звездное небо и рыбалка' ];
const PHOTOS = [ 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LNG_X_FIRST = 35.65000;
const LNG_X_LAST = 35.70000;
const LAT_Y_FIRST = 139.70000;
const LAT_Y_LAST = 139.80000;


const authorAvatar = 'img/avatars/user0${{getNumberNoRepeat(1, 10)}}.png';
const LAT_Y = getFractionalNumber( LAT_Y_FIRST, LAT_Y_LAST, 5 );
const LNG_X = getFractionalNumber( LNG_X_FIRST, LNG_X_LAST, 5 );
//console.log(TITLES);
//console.log(TYPE);
//console.log(CHECKIN);
//console.log(CHECKOUT);
//console.log(FEATURES);
//console.log(DESCRIPTION);
//console.log(PHOTOS);
//console.log(LNG_X_FIRST);
//console.log(LNG_X_LAST);
//console.log(LAT_Y_FIRST);
//console.log(LAT_Y_LAST);

function getInteger (min, max) {
  if (min > max || min < 0 || max < 0) {
    throw 'Диапазон должен быть положительным, включая ноль';
  }
  return Math.floor( Math.random() * ( max-min + 1) ) + min;
}

function getFractionalNumber (min, max, symbolsAfterPoint) {
  if (min > max || min < 0 || max < 0) {
    throw 'Диапазон должен быть положительным, включая ноль';
  }
  return +(Math.random() * ( max-min + 1) + min).toFixed(symbolsAfterPoint);
}

function getNumberNoRepeat (arr) {
  const randomElement = getInteger( 0, arr.length - 1);
  return randomElement;
}

getInteger(5, 10);
getFractionalNumber(2, 5, 3);
getNumberNoRepeat([ 15, 1, 8, 46, 950, 75, 3 ]);


const createAdd = function () {
  return {
    author: {
      avatar: authorAvatar,
    },
    offer: {
      title: getInteger(TITLES),
      adress: '{{location.x}}, {{location.y}}',
      price: getInteger( 85, 150 ),
      type: getInteger(TYPE),
      rooms:  getInteger( 1, 8 ),
      guests: getInteger( 1, 12 ),
      checkin: getInteger(CHECKIN),
      checkout: getInteger(CHECKOUT),
      features: getNumberNoRepeat(FEATURES),
      descripton: getInteger(DESCRIPTION),
      photos: getInteger(PHOTOS),
    },
    location: {
      lat: LAT_Y,
      lng: LNG_X,
    }
  }
}

const simiilarAddVaribles = 3;
const createSimilarAdd = new Array(simiilarAddVaribles).fill('').map() = function () {
  return createAdd();
}

createAdd();
createSimilarAdd();
