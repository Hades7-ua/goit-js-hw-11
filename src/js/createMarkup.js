import { fetchPixabayImages } from './pixabayAPI';
import refs from './refs';

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

async function fetchDataAndCreateMarkup() {
  try {
    const dataPixabay = await fetchPixabayImages();
    createMarkup(dataPixabay);
  } catch (error) {
    console.log(error);
  }
}

function createMarkup(dataPixabay) {
  refs.gallery.innerHTML = '';

  dataPixabay.forEach(imageData => {
    const photoCardMarkup = createPhotoCard(imageData);
    refs.gallery.insertAdjacentHTML('beforeend', photoCardMarkup);
  });
}

export { fetchDataAndCreateMarkup, createMarkup };
