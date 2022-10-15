import { UseQueryResult } from 'react-query/types/react/types';

import useAppQuery, { appQuery } from '@hooks/queries/factories/useAppQuery';
import AppQueryInterface from '@interfaces/appQueryInterface';

const groupKey = 'BOARD';

const boardQuery = <TData>(url: string, query: AppQueryInterface = { queryKey: '' }) =>
  appQuery<TData, unknown>(groupKey, url, query);

const useBoardQuery = <TData>(url: string, queryKey: string = 'temp-key'): UseQueryResult<TData, unknown> =>
  useAppQuery(boardQuery<TData>(url, { isQuery: true, queryKey, options: {} }));

export default useBoardQuery;
export { boardQuery };
