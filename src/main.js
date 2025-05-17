import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
  } from './js/render-functions.js';
  
  import { getImagesByQuery } from './js/pixabay-api.js';
  
  import iziToast from 'izitoast';
  import 'izitoast/dist/css/iziToast.min.css';
  
  const form = document.querySelector('.form');
  const input = form.elements['search-text'];
  
  form.addEventListener('submit', event => {
    event.preventDefault();
  
    const query = input.value.trim();
    if (!query) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search term!',
        position: 'topRight',
      });
      return;
    }
  
    clearGallery();
    showLoader();
  
    getImagesByQuery(query)
      .then(data => {
        const images = data.hits;
  
        if (images.length === 0) {
          iziToast.info({
            title: 'No Results',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          return;
        }
  
        createGallery(images);
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: 'Something went wrong. Please try again later.',
          position: 'topRight',
        });
      })
      .finally(() => {
          hideLoader();
          input.value = '';
      });
  });