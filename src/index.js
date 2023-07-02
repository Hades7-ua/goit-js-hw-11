import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import {
  fetchDataAndCreateMarkup,
  createMarkup,
  createPhotoCard,
} from './js/createMarkup';
import { fetchPixabayImages } from './js/pixabayAPI';
import refs from './js/refs';

const { form, gallery, btnloadmore } = refs;

// refs.form.addEventListener('submit', handleOnSubmit);

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = event.target.searchQuery.value;

  fetchPixabaiImages(searchQuery, 1)
    .then(data => {
      createMarkup(data);
    })
    .catch(error => {
      console.log(error);
      throw new Error('Oops! Something went wrong! Try reloading the page!');
    });
});

fetchDataAndCreateMarkup();
