import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchDataAndCreateMarkup, createMarkup } from './js/createMarkup';
import { fetchPixabayImages } from './js/pixabayAPI';
import refs from './js/refs';

const { form, gallery, btnloadmore } = refs;

fetchDataAndCreateMarkup();
