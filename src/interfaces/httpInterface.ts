import { AxiosRequestHeaders } from 'axios';
import { QueriesOptions, UseQueryOptions } from 'react-query';
import { MutationFunction, MutationKey } from 'react-query/types/core/types';
import { UseMutationOptions, UseMutationResult, UseQueryResult } from 'react-query/types/react/types';

import AppQueryInterface from '@interfaces/appQueryInterface';


export interface HttpConstructorInterface {
  majorKey?: string;
  headers?: AxiosRequestHeaders | undefined;
  options?: QueriesOptions<any>;
}

export interface HttpInterface {
  majorKey: string;
  query: IQuery;
  get: IGet;
  mutation: IMutation;
  post: IPost;
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
    }: Pick<AppQueryInterface, 'isQuery' | 'queryKey' | 'options'>): UseQueryOptions<TQueryFnData, TError, TData>;
}

interface IGet {
  <TQueryFnData, TError = unknown, TData = TQueryFnData>(url: string, queryKey: string): UseQueryResult<TData, TError>;
}

interface IPost {
  <TData, TError, TVariables, TContext>(mutationFn: MutationFunction<TData, TVariables>,
                                        mutationKey?: string,
                                        options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey' | 'mutationFn'>,
  ): UseMutationResult<TData, TError, TVariables, TContext>;
}

interface IMutation {
  <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationKey: MutationKey, mutationFn?: MutationFunction<TData, TVariables>, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<TData, TError, TVariables, TContext>;
}
