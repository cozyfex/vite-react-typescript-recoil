import { QueriesOptions, QueryFunction, QueryKey } from 'react-query';

export default interface AppQueryInterface {
  queryKey: QueryKey;
  isQuery?: boolean;
  queryFn?: QueryFunction;
  options?: QueriesOptions<any>;
}
