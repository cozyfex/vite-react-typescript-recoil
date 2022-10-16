import { appQuery } from '@hooks/queries/factories/useHttp';
import IAppQuery from '@interfaces/IAppQuery';
import { UseQueryOptions } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

export interface IHttp {
  query: IQuery;
  get: IGet;
  post: Function;
  put: Function;
  delete: Function;
}

interface IQuery {
  <TQueryFnData, TError = unknown, TData = TQueryFnData>(
    apiUrl: string,
    {
      isQuery,
      queryKey,
      options,
    }: Pick<IAppQuery, 'isQuery' | 'queryKey' | 'options'>): UseQueryOptions<TQueryFnData, TError, TData>;
}

interface IGet {
  <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey: string): UseQueryResult<TData, TError>;
}
