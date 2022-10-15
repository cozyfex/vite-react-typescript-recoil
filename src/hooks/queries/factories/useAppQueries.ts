import { useQueries, UseQueryOptions } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

const useAppQueries = (queries: any[]) => {
  console.log(queries);
  return useQueries(queries);
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
