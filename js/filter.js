const filterForm = document.querySelector('.map__filters');
const filterType = filterForm.querySelector('#housing-type');
const filterPrice = filterForm.querySelector('#housing-price');
const filterRooms = filterForm.querySelector('#housing-rooms');
const filterGuests = filterForm.querySelector('#housing-guests');
const DEFAULT = 'any';
const MAX_ADS = 10;

const filterAdsNumber = (adsArray) => adsArray.slice(0, MAX_ADS);

const checkFilterType = (ad) => ad === filterType.value ||
filterType.value === DEFAULT;

const checkFilterPrice = (ad) => {
  const price = ad;

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

const checkFilterRooms = (ad) => ad === +filterRooms.value ||
filterRooms.value === DEFAULT;

const checkFilterGusts = (ad) => ad === +filterGuests.value || filterGuests.value === DEFAULT;


const checkFilterFeatures = (ad = []) => {
  const selectedFeatures = [...filterForm.querySelectorAll('[name="features"]')]
    .filter((featureElement) => featureElement.checked)
    .map((featureElement) => featureElement.value);

  return !selectedFeatures.length || selectedFeatures.every((feature) => ad.includes(feature));
};


const getFiltredAds = (adverts) => adverts.filter((ad) => checkFilterType(ad.offer.type) && checkFilterPrice(ad.offer.price) && checkFilterRooms(ad.offer.rooms) && checkFilterGusts(ad.offer.guests) && checkFilterFeatures(ad.offer.features)).slice(0, MAX_ADS);

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
