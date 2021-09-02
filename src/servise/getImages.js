import axios from 'axios';

function getImages(value, page) {
  const key = '22388930-c659fb0b8aa307ade6aeafc5c';
  const baseUrl = 'https://pixabay.com/api/';
  const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${key}`;
  return axios.get(url).then(response => response.data.hits);
}

export default  getImages ;
