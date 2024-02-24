import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { render } from './render-functions';

const searchInput = document.querySelector('.searchInput');

const KEY = '42324270-89622daef349524aeb531ebd1';
const BASE_URL = 'https://pixabay.com/api/';
const otherParams = 'image_type=photo&orientation=horizontal&safesearch=true';

export function getImages() {
  const query = searchInput.value.trim();
  const LINK = `${BASE_URL}?key=${KEY}&q=${query}&${otherParams}`;

  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          position: 'topRight',
          timeout: 3500,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          close: false,
          messageColor: 'white',
          backgroundColor: 'green',
        });
      } else {
        render(data.hits);
      }
    })
    .catch(error => {
      alert('Error while rendering images');
    });
}
