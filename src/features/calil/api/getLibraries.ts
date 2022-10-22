import {CALIL_API_KEY} from '@env';
import {axios} from 'src/lib/axios';

export const getLibraries = () => {
  return axios.get('/library', {
    params: {
      app_key: CALIL_API_KEY,
      callback: '',
      format: 'json',
      pref: '鳥取県',
    },
  });
};
