import { QueriesOptions, QueryFunction, QueryKey } from 'react-query';

export default interface IAppQuery {
  queryKey: QueryKey;
  url?: String;
  isQuery?: Boolean;
  queryFn?: QueryFunction;
  options?: QueriesOptions<any>;
}
