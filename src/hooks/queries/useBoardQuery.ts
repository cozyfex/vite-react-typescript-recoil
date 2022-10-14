import useAppQuery, { appQuery } from '@hooks/queries/useAppQuery';
import AppQueryInterface from '@interfaces/appQueryInterface';
import { BoardInterface } from '@interfaces/boardInterface';
import { ListInterface } from '@interfaces/listInterface';

const boardQuery = (query: AppQueryInterface = { queryKey: '' }) =>
  appQuery('BOARD-LIST', '/board/list', query);

const boardApi = ({ queryKey, options }: AppQueryInterface) =>
  useAppQuery(boardQuery({ isQuery: true, queryKey, options }));

const useBoardQuery = (queryKey: string = 'temp-key') => {
  const result = boardApi({ queryKey, options: {} });
  return { ...result, data: result.data as ListInterface<BoardInterface[]> };
};

export default useBoardQuery;
export { boardQuery };
