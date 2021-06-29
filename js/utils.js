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


const getRandomSubArray = (array) => array.slice(0, getInteger(1, array.length));

export {
  getInteger,
  getFractionalNumber,
  getRandomElement,
  getRandomSubArray
};

/* eslint-disable no-console */

/* eslint-enable no-console */
