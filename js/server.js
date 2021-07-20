const fetchLink = 'https://23.javascript.pages.academy/keksobooking/';

const loadSimilarAd = (onSuccess, onError) => {

  fetch(`${fetchLink}data`, {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => onError());
};

const sendForm = (formData, onSuccess, onError) => {
  fetch(fetchLink, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      response.ok ? onSuccess() : onError();
    })
    .catch(() => onError());
};

export {
  loadSimilarAd,
  sendForm
};
