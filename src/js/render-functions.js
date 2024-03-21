

function createGalleryMarkup(items) {
  const gallery = document.querySelector('.gallery');
  const markup = items
    .map(item => {
      return `<li class="gallery-list-item">
        <a class="gallery-link" href="${item.largeImageURL}">
            <img class="gallery-list-item-img" src="${item.webformatURL}" alt="${item.tags}"/>        
        </a>
            <div class="text-wrapper">
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Likes</p>
                    <p class ="gallery-list-item-text">${item.likes}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Views</p>
                    <p class ="gallery-list-item-text">${item.views}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Comments</p>
                    <p class ="gallery-list-item-text">${item.comments}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Downloads </p>
                    <p class ="gallery-list-item-text">${item.downloads}</p>
                </div>
            </div>
            
      </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export default createGalleryMarkup;