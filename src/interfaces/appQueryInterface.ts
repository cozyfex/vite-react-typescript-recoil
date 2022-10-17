import { QueriesOptions, QueryFunction, QueryKey } from 'react-query';

export default interface AppQueryInterface {
  queryKey: QueryKey;
  url?: String;
  isQuery?: Boolean;
  queryFn?: QueryFunction;
  options?: QueriesOptions<any>;
}
