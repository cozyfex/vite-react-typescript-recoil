import { UseQueryResult } from 'react-query/types/react/types';

import useAppQuery, { appQuery } from '@hooks/queries/factories/useAppQuery';
import IAppQuery from '@interfaces/IAppQuery';

const groupKey = 'BOARD';

const boardQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, query: IAppQuery = { queryKey: '' }) =>
  appQuery<TQueryFnData, TError, TData>(groupKey, url, query);

const useBoardQuery = <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey: string = 'temp-key'): UseQueryResult<TData, TError> =>
  useAppQuery(boardQuery<TQueryFnData, TError, TData>(url, { isQuery: true, queryKey, options: {} }));

export default useBoardQuery;
export { boardQuery };
