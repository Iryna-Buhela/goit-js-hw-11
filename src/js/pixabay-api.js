import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50306313-7dd778a7e5a97bb6309a7d780';

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
  .then(response => response.data);
}


  

