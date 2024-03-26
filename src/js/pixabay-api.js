import axios from 'axios';

async function fetchImg(searchWord, page, per_page = 15) {
  const apiKey = '42869495-3eaffa1d7f59c13a6a9af4ac7';

  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchWord}&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`;

  try {
    if (!searchWord) {
      throw new Error('Search word is empty');
    }

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch images: ${error.message}`);
  }
}

export default fetchImg;
