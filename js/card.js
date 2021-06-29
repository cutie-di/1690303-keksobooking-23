import {
  HOUSING_TYPE
} from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

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
    return `для ${guestsNumber} гостей`;
  }
  return `для ${guestsNumber} гостя`;
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
    fragment.appendChild(img);
  });
  return fragment;
};

const removeEmptyElements = (container) => {
  const elements = Array.from(container.children);
  elements.forEach((element) => {
    if (!element.innerHTML) {
      element.remove();
    }
  });
};

const createCard = ({
  author,
  offer,
}) => {
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.popup__avatar').src = author.avatar || '';

  newCard.querySelector('.popup__title').textContent = offer.title || '';
  newCard.querySelector('.popup__text--address').textContent = offer.address || '';
  newCard.querySelector('.popup__text--price').textContent = HOUSING_TYPE[offer.type] || '';
  newCard.querySelector('.popup__type').textContent = `${offer.price} ₽/ночь` || '';

  newCard.querySelector('.popup__text--capacity').textContent = (!offer.rooms || !Number.isInteger(offer.guests)) ? '' : `${offer.rooms} ${getCorrectRoomsEnding(offer.rooms)} ${getCorrectGuestsEnding(offer.guests)}`;

  newCard.querySelector('.popup__text--time').textContent = (!offer.checkin || !offer.checkout) ? newCard.querySelector('.popup__text--time').remove() : `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const featureContainer = newCard.querySelector('.popup__features');
  featureContainer.innerHTML = '';
  const newFeatureElements = createFeatures(offer.features);
  featureContainer.appendChild(newFeatureElements);

  const photoContainer = newCard.querySelector('.popup__photos');
  photoContainer.innerHTML = '';
  const newPhotoElements = createPhotos(offer.photos);
  photoContainer.appendChild(newPhotoElements);

  newCard.querySelector('.popup__description').textContent = offer.description || '';


  removeEmptyElements(newCard);

  return newCard;
};


export {
  createCard
};
