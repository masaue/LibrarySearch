import Axios from 'axios';

import {CALIL_API_URL} from '@env';

export const axios = Axios.create({
  baseURL: CALIL_API_URL,
});

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);
