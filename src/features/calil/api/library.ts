import {CALIL_API_KEY} from 'src/config';
import {axios} from 'src/lib/axios';

export const getLibrary = () => {
  return axios.get('/library', {
    params: {
      app_key: CALIL_API_KEY,
      pref: '鳥取県',
    },
  });
};
