// Імпорти бібліотек
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import IziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// Імпорти функцій
import fetchImg from './js/pixabay-api';
import createGalleryMarkup from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loaderSecond = document.querySelector('.loader-2');
const searchInput = document.querySelector('.search-input');
let searchWord = '';
const galWrap = document.querySelector('.gallery');
const moreBtn = document.querySelector('.more-btn');
let page;
const per_page = 15;
const totalPages = Math.ceil(500 / per_page);
const lightbox = new SimpleLightbox('.gallery a', {});

const showLoader = () => {
  loader.classList.add('is-open');
};
const hideLoader = () => {
  loader.classList.remove('is-open');
};
const showSecondLoader = () => {
  loaderSecond.classList.add('is-open');
};
const hideSecondLoader = () => {
  loaderSecond.classList.remove('is-open');
};
const showMoreBtn = () => {
  moreBtn.classList.remove('hidden');
};
const hideMoreBtn = () => {
  moreBtn.classList.add('hidden');
};

// оборбка події сабміт

form.addEventListener('submit', async evt => {
  hideMoreBtn();
  galWrap.innerHTML = '';
  evt.preventDefault();
  page = 1;
  try {
    searchWord = searchInput.value.trim();
    if (!searchWord) {
      return IziToast.error({
        position: 'topRight',
        message: 'Search word is empty',
      });
    }
    showLoader();
    const imagesData = await fetchImg(searchWord, page);
    const { hits } = imagesData;
    if (hits.length === 0) {
       hideLoader();
      form.reset();
      return IziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
      });
    }

    page += 1;

    createGalleryMarkup(hits);

    lightbox.refresh();
    hideLoader();
    showMoreBtn();
    form.reset();
  } catch (error) {
    console.log(error);
  }
});

// Обробка події клік кнопки Load more

moreBtn.addEventListener('click', async evt => {
  evt.preventDefault();
  showSecondLoader();
  if (page > totalPages) {
    hideMoreBtn();
    return IziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
  try {
    const imagesData = await fetchImg(searchWord, page);

    page += 1;
    const { hits } = imagesData;
    
    createGalleryMarkup(hits);
    hideSecondLoader();
    lightbox.refresh();
    if (hits.length === 0) {
      hideMoreBtn();
      form.reset();
      return IziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  }
  
  smoothScroll();
  form.reset();
});

// Функція плавного скроллу

function smoothScroll() {
  const card = document.querySelector('.gallery-list-item');
  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
