import { fetchPixabayImages } from './pixabayAPI';
import Notiflix from 'notiflix';
import refs from './refs';

function createPhotoCard(imageData) {
  const photoCard = `<a href="${imageData.largeImageURL}">
    <div class="photo-card">
     <img src="${imageData.webformatURL}" alt="${imageData.alt}" loading="lazy" />
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${imageData.likes}</p>
        <p class="info-item"><b>Views:</b> ${imageData.views}</p>
        <p class="info-item"><b>Comments:</b> ${imageData.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${imageData.downloads}</p>
      </div>
    </div>
  `;

  return photoCard;
}
function createMarkup(data) {
  refs.gallery.innerHTML = '';

  data.forEach(imageData => {
    const photoCardMarkup = createPhotoCard(imageData);
    refs.gallery.insertAdjacentHTML('beforeend', photoCardMarkup);
  });
}

export { createMarkup, createPhotoCard };
