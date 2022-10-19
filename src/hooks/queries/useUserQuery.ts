import { UseQueryOptions } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

import useHttp from '@hooks/queries/factories/useHttp';


const groupKey = 'USER';

const useUserHttp = () => useHttp(groupKey, { useErrorBoundary: true });

const userQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey = 'temp-key'): UseQueryOptions<TQueryFnData, TError, TData> =>
  useUserHttp().query<TQueryFnData, TError, TData>(url, { queryKey, isQuery: true });

const useUserQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey: string = 'temp-key'): UseQueryResult<TData, TError> =>
  useUserHttp().get(url, queryKey);

export default useUserHttp;
export { useUserHttp, useUserQuery, userQuery };
