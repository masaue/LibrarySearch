import {CALIL_API_KEY} from '@env';
import {axios} from 'src/lib/axios';
import {Library} from 'src/features/calil/types/library';

export const getLibraries = (pref: string): Promise<Library[]> => {
  return axios.get('/library', {
    params: {
      app_key: CALIL_API_KEY,
      callback: '',
      format: 'json',
      pref,
    },
  });
};
