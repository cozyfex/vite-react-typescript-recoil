import useAxios from '@hooks/useAxios';
import IAppQuery from '@interfaces/IAppQuery';
import { AxiosResponse } from 'axios';
import { QueryFunctionContext, QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

const appQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(
  majorKey: string,
  apiUrl: string,
  {
    isQuery,
    queryKey,
    options,
  }: Pick<IAppQuery, 'isQuery' | 'queryKey' | 'options'>): UseQueryOptions<TData, TError, TData> => {

  const api = useAxios();
  const data: UseQueryOptions<TQueryFnData, TError, TData> = {
    queryKey: [majorKey, queryKey],
    queryFn: <TQueryFnData>() => api.get(apiUrl),
    select: (res: TQueryFnData): TData => (res as unknown as AxiosResponse)?.data,
  };

  if (isQuery) return { ...data, options: options } as UseQueryOptions<TData, TError, TData>;
  else return { ...data, staleTime: Infinity, ...options } as UseQueryOptions<TData, TError, TData>;

};

const useAppQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(options: UseQueryOptions<TQueryFnData, TError, TData>): UseQueryResult<TData, TError> => {

  const { onError } = options;

  return useQuery<TQueryFnData, TError, TData>({ ...options, useErrorBoundary: !onError });
};

export default useAppQuery;
export { appQuery };
