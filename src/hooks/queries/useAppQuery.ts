import useAxios from '@hooks/useAxios';
import AppQueryInterface from '@interfaces/appQueryInterface';
import { useQuery } from 'react-query';

const appQuery = (majorKey: string, apiUrl: string, {
  isQuery,
  queryKey,
  options,
}: AppQueryInterface) => {
  const api = useAxios();

  if (isQuery) {
    return {
      queryKey: [majorKey, queryKey],
      queryFn: () => api.get(apiUrl).then(res => res.data),
      options,
    };
  } else {
    return {
      queryKey: [majorKey, queryKey],
      queryFn: () => api.get(apiUrl).then(res => res.data),
      staleTime: Infinity,
      ...options,
    };
  }
};

const useAppQuery = ({
                       queryKey,
                       queryFn = () => {
                       },
                       options,
                     }: AppQueryInterface) => {
  const { onError } = options;

  return useQuery(queryKey, queryFn, { ...options, useErrorBoundary: !onError });
};

export default useAppQuery;
export { appQuery };
