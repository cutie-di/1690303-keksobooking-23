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

export {
  getInteger,
  getFractionalNumber,
  getRandomElement
};

/* eslint-disable no-console */
//console.log(getInteger(5, 10));
//console.log(getFractionalNumber(2, 5, 3));
//console.log(getRandomElement([15, 1, 8, 46, 950, 75, 3]));
/* eslint-enable no-console */
