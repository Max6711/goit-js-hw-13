import axios from 'axios';

async function fetchImg(searchInput) {
  const apiKey = '42869495-3eaffa1d7f59c13a6a9af4ac7';
  const searchWord = searchInput.value;
  let page = 1;
  let limit = 15;
  const searchParams = new URLSearchParams({
    page: page,
    limit: limit,
  });
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchWord}&orientation=horizontal&safesearch=true&${searchParams}`;

  const response = await axios.get(url);
  return response.data;

  //   return axios.get(url).then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   });
}

export default fetchImg;
