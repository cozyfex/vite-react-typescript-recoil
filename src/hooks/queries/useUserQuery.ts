import { UseQueryResult } from 'react-query/types/react/types';

import useAppQuery, { appQuery } from '@hooks/queries/factories/useAppQuery';
import AppQueryInterface from '@interfaces/appQueryInterface';

const groupKey = 'USER';

const userQuery = <TData>(url: string, query: AppQueryInterface = { queryKey: '' }) =>
  appQuery<TData, unknown>(groupKey, url, query);

const useUserQuery = <TData>(url: string, queryKey: string = 'temp-key'): UseQueryResult<TData, unknown> =>
  useAppQuery(userQuery<TData>(url, { isQuery: true, queryKey, options: {} }));

export default useUserQuery;
export { userQuery };
