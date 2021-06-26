import {
  getCorrectRoomsEnding,
  getCorrectGuestsEnding,
  createFeatures,
  createPhotos
} from './utils.js';

import {
  HOUSING_TYPE
} from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createCard = ({
  author,
  offer,
}) => {
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.popup__avatar').src = author.avatar;

  newCard.querySelector('.popup__title').textContent = offer.title;
  newCard.querySelector('.popup__text--address').textContent = offer.address;
  newCard.querySelector('.popup__text--price').textContent = HOUSING_TYPE[offer.type];
  newCard.querySelector('.popup__type').textContent = `${offer.price} ₽/ночь`;
  newCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${getCorrectRoomsEnding} для ${offer.guests} ${getCorrectGuestsEnding}`;
  newCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.title}, выезд до ${offer.checkout}`;

  const featureItems = cardTemplate.querySelector('.popup__features').children;
  featureItems.innerHTML = '';
  const newFeatureElements = createFeatures(offer.features);
  featureItems.appendChild(newFeatureElements);

  const photoItems = cardTemplate.querySelector('.popup__features').children;
  photoItems.innerHTML = '';
  const newPhotoElements = createPhotos(offer.photos);
  photoItems.appendChild(newPhotoElements);


  // Если отсутствует описание, соответствующий блок в карточке скрывается
  // Два варианта, как лучше?
  newCard.querySelector('.popup__description').textContent = offer.description;

  //const newCardDecription = newCard.querySelector('.description');
  //if (newCard.querySelector('.popup__description').length === 0) {
  //  newCardDecription.style.display = 'none';
  //}

  // или так, чтобы было для всех, а не только для описания? Тогда как указать класс?

  //const element = newCard.querySelector();
  //if (value.length === 0) {
  //  element.classList.add('hidden');
  //}

  return newCard;
};


export {
  createCard
};
