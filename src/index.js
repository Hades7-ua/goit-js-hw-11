import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new simpleLightbox('.gallery a', {
  captionDelay: '250',
});

import { createMarkup, createPhotoCard } from './js/createMarkup';
import { fetchPixabayImages } from './js/pixabayAPI';
import refs from './js/refs';

const { form, gallery, btnloadmore } = refs;
let currentPage = 1;
let totalHits = 0;
let savedData = [];
btnloadmore.classList.add('hidden');

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';
  btnloadmore.classList.add('hidden');
  savedData = [];

  currentPage = 1;

  const searchQuery = event.target.searchQuery.value;

  fetchPixabayImages(searchQuery, currentPage)
    .then(data => {
      totalHits = data.totalHits;

      savedData = data.hits;

      createMarkup(savedData);

      if (savedData.length > 0) {
        btnloadmore.classList.remove('hidden');
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
      }

      lightbox.refresh();
      if (savedData.length === 0) {
        Notiflix.Notify.warning(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
});

btnloadmore.addEventListener('click', () => {
  const searchQuery = form.searchQuery.value;

  fetchPixabayImages(searchQuery, currentPage + 1)
    .then(data => {
      savedData = savedData.concat(data.hits);

      createMarkup(savedData);
      currentPage += 1;

      if (currentPage * 4 >= totalHits) {
        btnloadmore.classList.add('hidden');
        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      }

      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
  lightbox.refresh();
});
