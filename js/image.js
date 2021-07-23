const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const offerChooser = document.querySelector('.ad-form__input');
const offerPreview = document.querySelector('.ad-form__photo');

const createImage = () => {
  const img = document.createElement('img');
  img.src = '';
  img.width = 70;
  img.height = 70;
  img.style.backgroundSize = 'cover';
  img.alt = 'Фото жилья';
  offerPreview.appendChild(img);
};

const resetImage = () => {
  avatarPreview.src = 'img/muffin-grey.svg';

  if (offerPreview.firstChild) {
    offerPreview.firstChild.remove();
  }
};

const loadPreview = (chooser, photo) => {
  const file = chooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      photo.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
};

avatarChooser.addEventListener('change', () => {
  loadPreview(avatarChooser, avatarPreview);
});

offerChooser.addEventListener('change', () => {
  resetImage();
  createImage();
  loadPreview(offerChooser, offerPreview.firstChild);
});

export {
  resetImage
};
