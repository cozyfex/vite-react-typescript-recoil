import { useQueries } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

const useAppQueries = (queries: any[]) => useQueries(queries);
const typeConversion = <T extends any>(query: UseQueryResult) => ({ ...query, data: query.data as T });

export default useAppQueries;
export { typeConversion };
