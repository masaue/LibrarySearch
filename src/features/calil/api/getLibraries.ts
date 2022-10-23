import {useQuery} from 'react-query';

import {CALIL_API_KEY} from '@env';
import {Library} from 'src/features/calil/types/library';
import {axios} from 'src/lib/axios';
import {ExtractFnReturnType, QueryConfig} from 'src/lib/react-query';

export const getLibraries = (pref: string): Promise<Library[]> => {
  return axios.get('/library', {
    params: {
      app_key: CALIL_API_KEY,
      callback: '',
      format: 'json',
      limit: 2,
      pref,
    },
  });
};

type QueryFnType = typeof getLibraries;

type UseLibrariesOptions = {
  prefecture: string;
  config?: QueryConfig<QueryFnType>;
};

export const useLibraries = ({prefecture, config}: UseLibrariesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['library'],
    queryFn: () => getLibraries(prefecture),
    ...config,
  });
};
