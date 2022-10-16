import useBoardQuery from '@hooks/queries/useBoardQuery';
import useUserQuery, { userQuery } from '@hooks/queries/useUserQuery';
import { IBoard } from '@interfaces/IBoard';
import { IList } from '@interfaces/IList';
import { IUser } from '@interfaces/IUser';
import { countState, sampleState } from '@states/sampleState';
import { useQueries } from 'react-query';
import { useRecoilState } from 'recoil';

const AnotherPage = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);

  const [user, board] = [
    useUserQuery<IList<IUser[]>>('/user/list'),
    useBoardQuery<IList<IBoard[]>>('/board/list'),
  ];

  useQueries<IUser[]>((user.isSuccess ? user.data.list : []).map((item, index) =>
    userQuery(`/user/view/${index}`, { queryKey: item.userId }),
  ));

  const decrease = () => setCount(count - 1);
  const setTitle = () => setSample({ ...sample, title: String(document.querySelector('input')?.value) });

  return (
    <div>
      <div>Another Page</div>
      <div>{count}</div>
      <div>
        <button onClick={decrease}>Decrease</button>
      </div>
      <div>{sample.title}</div>
      <div>
        <input type="text" onChange={setTitle} />
      </div>

      {user.isLoading ? <div>Loading...</div> :
        user.isSuccess ?
          <div>
            <table>
              <thead>
              <tr>
                <th>No</th>
                <th>ID</th>
                <th>name</th>
              </tr>
              </thead>
              <tbody>
              {user.data.list.map((item, index) =>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.userId}</td>
                  <td>{item.name}</td>
                </tr>,
              )}
              </tbody>
            </table>
          </div> : null
      }

      {board.isLoading ? <div>Loading...</div> :
        board.isSuccess ?
          <div>
            <table>
              <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Name</th>
                <th>Read Count</th>
              </tr>
              </thead>
              <tbody>
              {board.data.list.map((item, index) =>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.name}</td>
                  <td>{item.readCount}</td>
                </tr>,
              )}
              </tbody>
            </table>
          </div> : null
      }

    </div>
  );
};

export default AnotherPage;
