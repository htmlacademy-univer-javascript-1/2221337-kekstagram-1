import {uploadForm} from './uploading-form.js';
import {setData} from './fetch.js';
import {onRecieveSuccess, showUnloadingErrorMessage} from './uploading-data.js';

setData(onRecieveSuccess,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные из сервера :(');
  },
  'GET');

uploadForm();
