import Axios from 'axios';

import {CALIL_API_URL} from 'src/config';

export const axios = Axios.create({
  baseURL: CALIL_API_URL,
});
