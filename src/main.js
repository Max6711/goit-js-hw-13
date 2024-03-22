const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const searchInput = document.querySelector('.search-input');
let searchWord = '';
const galWrap = document.querySelector('.gallery');
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const moreBtn = document.querySelector('.more-btn');

let page = 1;
const limit = 15;

import fetchImg from './js/pixabay-api';
import createGalleryMarkup from './js/render-functions';
const lightbox = new simpleLightbox('.gallery a', {});

form.addEventListener('submit', async evt => {
  galWrap.innerHTML = '';
  evt.preventDefault();
  try {
    searchWord = searchInput.value;
    const imagesData = await fetchImg(searchWord);
    const { hits } = imagesData;

    loader.classList.add('is-open');

    if (hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
      });
    }

    createGalleryMarkup(hits);
    page += 1;
    if (page > 1) {
      moreBtn.classList.remove('hidden');
    }
    lightbox.refresh();
    loader.classList.remove('is-open');
    form.reset();
  } catch (error) {
    console.log(error);
  }
});

moreBtn.addEventListener('click', async evt => {
  evt.preventDefault();
  try {
    const imagesData = await fetchImg(searchWord, page, limit);
    const { hits } = imagesData;
    createGalleryMarkup(hits);
    lightbox.refresh();
  } catch (error) {
    console.log(error);
  }

  form.reset();
});
