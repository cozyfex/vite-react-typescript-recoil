import { UseQueryResult } from 'react-query/types/react/types';

import useAppQuery, { appQuery } from '@hooks/queries/factories/useAppQuery';
import IAppQuery from '@interfaces/IAppQuery';

const groupKey = 'USER';

const userQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, query: IAppQuery = { queryKey: '' }) =>
  appQuery<TQueryFnData, TError, TData>(groupKey, url, query);

const useUserQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey: string = 'temp-key'): UseQueryResult<TData, TError> =>
  useAppQuery(userQuery<TQueryFnData, TError, TData>(url, { isQuery: true, queryKey, options: {} }));

export default useUserQuery;
export { userQuery };
