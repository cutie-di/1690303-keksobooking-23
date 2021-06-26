// Вспомогательные функции

const getInteger = (min, max) => {
  if (min > max || min < 0 || max < 0) {
    throw 'Диапазон должен быть положительным, включая ноль';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getFractionalNumber = (min, max, symbolsAfterPoint) => {
  if (min > max || min < 0 || max < 0) {
    throw 'Диапазон должен быть положительным, включая ноль';
  }
  return +(Math.random() * (max - min) + min).toFixed(symbolsAfterPoint);
};

const getRandomElement = (arr) => {
  const randomElement = getInteger(0, arr.length - 1);
  return arr[randomElement];
};

const getCorrectRoomsEnding = (roomNumber) => {
  switch (roomNumber) {
    case 1:
      return 'комната';
    case 2:
    case 3:
    case 4:
      return 'комнаты';
    default:
      return 'комнат';
  }
};

const getCorrectGuestsEnding = (guestsNumber) => {
  if (guestsNumber === 0) {
    return 'не для гостей';
  }
  if (guestsNumber > 1) {
    return 'гостей';
  }
  return 'гостя';
};

const createFeatures = (features) => {
  const fragment = document.createDocumentFragment();

  features.forEach((feature) => {
    const li = document.createElement('li');
    li.classList.add('popup__feature', `popup__feature--${feature}`);
    fragment.appendChild(li);
  });
  return fragment;
};

const createPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photoUrl) => {
    const img = document.createElement('img');
    img.src = photoUrl;
    img.classList.add('popup__photo');
    img.alt = 'Фотография жилья';
    fragment.addChild(img);
  });
  return fragment;
};


export {
  getInteger,
  getFractionalNumber,
  getRandomElement
};

export {
  getCorrectRoomsEnding,
  getCorrectGuestsEnding,
  createFeatures,
  createPhotos
};

/* eslint-disable no-console */
//console.log(getInteger(5, 10));
//console.log(getFractionalNumber(2, 5, 3));
//console.log(getRandomElement([15, 1, 8, 46, 950, 75, 3]));
//console.log(getCorrectGuestsEnding(10));
//console.log(getCorrectRoomsEnding(9));
/* eslint-enable no-console */
