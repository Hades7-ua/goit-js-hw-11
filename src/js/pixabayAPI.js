import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37999116-3b925aa00aefce89ac64d9c93';

async function fetchPixabayImages(request, currentPage) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${currentPage}`
    );
    const data = response.data;
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error('Oops! Something went wrong! Try reloading the page!');
  }
}
// console.log(fetchPixabayImages());
export { fetchPixabayImages };
