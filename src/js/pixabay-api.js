import axios from 'axios';

async function fetchImg(searchWord, page, per_page) {
  const apiKey = '42869495-3eaffa1d7f59c13a6a9af4ac7';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchWord}&orientation=horizontal&image_type=photo&safesearch=true&page=${page}&per_page=${per_page}`;
  const response = await axios.get(url);
  return response.data;
}

export default fetchImg;
