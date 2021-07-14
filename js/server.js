const fetchLink = 'https://23.javascript.pages.academy/keksobooking/data';

const loadSimilarAd = (onSuccess, onFail) => {

  fetch(`${fetchLink}`, {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    });
};

const postAd = (onSuccess, onFail, data) => {
  const formData = new FormData(data);

  fetch(`${fetchLink}`, {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      response.ok ? onSuccess() : onFail();
    })
    .catch(() => {
      onFail();
    });
};

export {
  loadSimilarAd,
  postAd
};
