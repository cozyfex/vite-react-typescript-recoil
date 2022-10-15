import useAxios from '@hooks/useAxios';
import AppQueryInterface from '@interfaces/appQueryInterface';
import { QueryFunctionContext, QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

const appQuery = <TData, TError>(
  majorKey: string,
  apiUrl: string,
  {
    isQuery,
    queryKey,
    options,
  }: Pick<AppQueryInterface, 'isQuery' | 'queryKey' | 'options'>): Exclude<UseQueryOptions<TData, TError, TData>, 'refetchInterval'> => {

  const api = useAxios();
  const data: UseQueryOptions<TData, TError, TData> = {
    queryKey: [majorKey, queryKey],
    queryFn: <TData>(): Promise<TData> => api.get(apiUrl).then(res => res.data as TData),
  };

  if (isQuery) return { ...data, options: options } as UseQueryOptions<TData, TError, TData>;
  else return { ...data, staleTime: Infinity, ...options } as UseQueryOptions<TData, TError, TData>;

};

const useAppQuery = <TData, TError>(options: UseQueryOptions<TData, TError, TData>): UseQueryResult<TData, TError> => {

  const { onError } = options;

  return useQuery({ ...options, useErrorBoundary: !onError });
};

export default useAppQuery;
export { appQuery };
