function getInteger(min, max) {
  if (min >= max || min < 0 || max < 0) {
    throw 'Диапазон должен быть положительным, включая ноль';
  }
  return Math.floor( Math.random() * ( max-min + 1) ) + min;
}

function getFractionalNumber(min, max, symbolsAfterPoint) {
  if (min >= max || min < 0 || max < 0) {
    throw 'Диапазон должен быть положительным, включая ноль';
  }
  return (Math.random() * ( max-min + 1) + min).toFixed(symbolsAfterPoint);
}

getInteger();

getFractionalNumber();
