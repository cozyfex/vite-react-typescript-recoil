import { useQueries, UseQueryOptions } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';
import { QueriesOptions, QueriesResults } from 'react-query/types/react/useQueries';

const useAppQueries = <TData>(queries: [...QueriesOptions<TData[]>]): QueriesResults<TData[]> => {
  console.log(queries);
  return useQueries<TData[]>(queries);
};

export default useAppQueries;

// export default function useAppQueries<TQueries extends readonly UseQueryOptions[]>(
//   queries: [...TQueries],
// ): {
//   [ArrayElement in keyof TQueries]: UseQueryResult<TQueries[ArrayElement] extends { select: infer TSelect }
//     ? TSelect extends (data: any) => any
//       ? ReturnType<TSelect>
//       : never
//     : Awaited<ReturnType<NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>>>>;
// } {
//   return useQueries(
//     queries as UseQueryOptions<unknown, unknown, unknown>[],
//   ) as any;
// }
