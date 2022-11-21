import { renderPictures } from './renderer.js';
import {uploadForm} from './upload-form.js';
import {setData} from './fetch.js';
import {showUnloadingErrorMessage} from './utils.js';

setData(renderPictures,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные из сервера :(');
  },
  'GET');

uploadForm();
