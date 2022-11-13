import { addPictureEvent } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

const renderPicture = (picture) => {
  const newElement = pictureTemplate.cloneNode(true);

  newElement.querySelector('.picture__img').src = picture.url;
  newElement.querySelector('.picture__comments').textContent = picture.comments.length;
  newElement.querySelector('.picture__likes').textContent = picture.likes;

  addPictureEvent(newElement, picture);

  return newElement;
};

const renderPictures = (images) => {
  images.forEach((picture) => {
    picturesFragment.appendChild(renderPicture(picture));
  });

  pictures.appendChild(picturesFragment);
};

export {renderPictures};