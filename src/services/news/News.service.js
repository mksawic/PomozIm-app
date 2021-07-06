import {API_URL} from '@env';

export const newsRequest = (page = 1) =>
  fetch(`${API_URL}/news?page=${page}`).then(res => res.json());
