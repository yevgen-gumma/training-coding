import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';

const submitForm = document.querySelector('.submitForm');
const searchInput = document.querySelector('.searchInput');
const loader = document.querySelector('.loader');

submitForm.addEventListener('submit', event => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (query === '') {
    iziToast.show({
      position: 'topRight',
      timeout: 2000,
      message: 'Please, enter the word!',
      close: false,
      messageColor: 'white',
      backgroundColor: 'grey',
    });
    return;
  }

  // loader.classList.remove('hidden');

  getImages();

  // loader.classList.add('hidden');
});
