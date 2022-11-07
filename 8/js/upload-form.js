import { uploadHashtagInput, clearHashtagsField } from './hashtags.js';

const uploadingControl = document.querySelector('#upload-file');
const uploadingOverlay = document.querySelector('.img-upload__overlay');
const uploadingClose = document.querySelector('#upload-cancel');

const uploadingHashtags = uploadingOverlay.querySelector('.text__hashtags');
const uploadingComments = uploadingOverlay.querySelector('.text__description');
const uploadingButton = uploadingOverlay.querySelector('#upload-submit');

const clearForm = () => {
  uploadingOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  uploadingControl.value = '';
  clearHashtagsField();
  uploadingComments.value = '';

  uploadingButton.disabled = false;
};

const onEscapeUpload = (evt) => {
  if(evt.key === 'Escape' && document.activeElement !== uploadingHashtags && document.activeElement !== uploadingComments) {
    clearForm();

    document.removeEventListener('keydown', onEscapeUpload);
  }
};

uploadingClose.addEventListener('click', () => {
  clearForm();

  document.removeEventListener('keydown', onEscapeUpload);
});

const onUploadClick = () => {
  document.addEventListener('keydown', onEscapeUpload);

  uploadingOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  uploadHashtagInput();
};

const uploadForm = () => {
  uploadingControl.addEventListener('change', onUploadClick);
};

export{uploadForm};
