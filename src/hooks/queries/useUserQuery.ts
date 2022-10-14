import useAppQuery, { appQuery } from '@hooks/queries/useAppQuery';
import AppQueryInterface from '@interfaces/appQueryInterface';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';

const userQuery = (query: AppQueryInterface = { queryKey: '' }) =>
  appQuery('USER-LIST', '/user/list', query);

const userApi = ({ queryKey, options }: AppQueryInterface) =>
  useAppQuery(userQuery({ isQuery: true, queryKey, options }));

const useUserQuery = (queryKey: string = 'temp-key') => {
  const result = userApi({ queryKey, options: {} });
  return { ...result, data: result.data as ListInterface<UserInterface[]> };
};

export default useUserQuery;
export { userQuery };
