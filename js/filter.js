const filterForm = document.querySelector('.map__filters');
const filterType = filterForm.querySelector('#housing-type');
const filterPrice = filterForm.querySelector('#housing-price');
const filterRooms = filterForm.querySelector('#housing-rooms');
const filterGuests = filterForm.querySelector('#housing-guests');
const DEFAULT = 'any';

const MAX_ADS = 10;

const filterAdsNumber = (adsArray) => adsArray.slice(0, MAX_ADS);

const checkFilterType = (ad) => ad.offer.type === filterType.value ||
filterType.value === DEFAULT;

const checkFilterPrice = (ad) => {
  const price = ad.offer.price;

  switch (filterPrice.value) {
    case 'low':
      return (price < 10000);
    case 'middle':
      return (price >= 10000) && (price <= 50000);
    case 'high':
      return (price > 50000);
    default:
      return DEFAULT;
  }
};

const checkFilterRooms = (ad) => ad.offer.rooms === +filterRooms.value ||
filterRooms.value === DEFAULT;

const checkFilterGusts = (ad) => ad.offer.guests === +filterGuests.value ||
filterGuests.value === DEFAULT;

const selectedFeatures = [...filterForm.querySelectorAll('[name="features"]')]
  .filter((featureElement) => featureElement.selected)
  .map((featureElement) => featureElement.value);

const checkFilterFeatures = (ad) => {
  if (!selectedFeatures.length) {
    return true;
  }

  if (selectedFeatures.every((feature) => ad.offer.features.includes(feature))) {
    return true;
  }
};

const getFiltredAds = (adverts) => adverts.filter((ad) => checkFilterType(ad) && checkFilterPrice(ad) && checkFilterRooms(ad) && checkFilterGusts(ad) && checkFilterFeatures(ad)).slice(0, MAX_ADS);

const setFilterChangeCallback = (callback) => {
  filterForm.addEventListener('change', () => {
    callback();
  });
};

export {
  filterAdsNumber,
  getFiltredAds,
  setFilterChangeCallback
};
