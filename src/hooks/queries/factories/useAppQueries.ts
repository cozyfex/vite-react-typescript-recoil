import { useQueries, UseQueryOptions } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';
import { QueriesOptions, QueriesResults } from 'react-query/types/react/useQueries';

const useAppQueries = <TData>(queries: [...QueriesOptions<TData[]>]): QueriesResults<TData[]> => {
  return useQueries<TData[]>(queries);
};

export default useAppQueries;
