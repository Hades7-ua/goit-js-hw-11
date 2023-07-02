import { fetchPixabayImages } from './pixabayAPI';
import Notiflix from 'notiflix';
import refs from './refs';

// console.log(createPhotoCard());
async function fetchDataAndCreateMarkup() {
  try {
    const data = await fetchPixabayImages();
    // createMarkup(data);
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

function createMarkup(data) {
  refs.gallery.innerHTML = '';

  data.forEach(imageData => {
    const photoCardMarkup = createPhotoCard(imageData);
    refs.gallery.insertAdjacentHTML('beforeend', photoCardMarkup);
  });
}
function createPhotoCard(imageData) {
  const photoCard = `
    <div class="photo-card">
    <a href="${imageData.largeImageURL}">
      <img src="${imageData.src}" alt="${imageData.alt}" loading="lazy" />
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

export { fetchDataAndCreateMarkup, createMarkup, createPhotoCard };
