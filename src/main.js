const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loaderSecond = document.querySelector('.loader-2');
const searchInput = document.querySelector('.search-input');
let searchWord = '';
const galWrap = document.querySelector('.gallery');
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const moreBtn = document.querySelector('.more-btn');

const showLoader = () => {
  loader.classList.add('is-open');
};
const hideLoader = () => {
  loader.classList.remove('is-open');
};
const showSecondLoader = () => {
  loaderSecond.classList.remove('hidden');
};
const hideSecondLoader = () => {
  loaderSecond.classList.add('hidden');
};

let page = 1;
const per_page = 15;
const totalPages = Math.ceil(500 / per_page);

import fetchImg from './js/pixabay-api';
import createGalleryMarkup from './js/render-functions';
const lightbox = new simpleLightbox('.gallery a', {});

form.addEventListener('submit', async evt => {
  galWrap.innerHTML = '';
  evt.preventDefault();
  try {
    searchWord = searchInput.value;
    if (!searchWord) {
      return iziToast.error({
        position: 'topRight',
        message: 'Search word is empty',
      });
    }
    showLoader();
    const imagesData = await fetchImg(searchWord);
    const { hits } = imagesData;
    page += 1;
    if (hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
      });
    }
    if (page >= 2) {
      moreBtn.classList.remove('hidden');
    }
    createGalleryMarkup(hits);

    lightbox.refresh();
    hideLoader();

    form.reset();
  } catch (error) {
    console.log(error);
  }
});

moreBtn.addEventListener('click', async evt => {
  evt.preventDefault();

  if (page > totalPages) {
    moreBtn.classList.add('hidden');
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
  try {
    showSecondLoader();
    const imagesData = await fetchImg(searchWord, page, per_page);

    page += 1;
    const { hits } = imagesData;
    createGalleryMarkup(hits);
    smoothScroll();
    hideSecondLoader();
    lightbox.refresh();
  } catch (error) {
    console.log(error);
  }

  form.reset();
});

function smoothScroll() {
  const card = document.querySelector('.gallery-list-item');
  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
