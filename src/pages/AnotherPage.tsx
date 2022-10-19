import BoardListComponent from '@components/BoardListComponent';
import ErrorFallbackComponent from '@components/ErrorFallbackComponent';
import UserListComponent from '@components/UserListComponent';
import WebLayout from '@layouts/web/WebLayout';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilState } from 'recoil';

import useAppQueries from '@hooks/queries/factories/useAppQueries';
import useBoardHttp from '@hooks/queries/useBoardQuery';
import useUserHttp, { userQuery } from '@hooks/queries/useUserQuery';
import { BoardInterface } from '@interfaces/boardInterface';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';
import { countState, sampleState } from '@states/sampleState';

const AnotherPage = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);

  // useAppQueries<UserInterface>((user.isSuccess ? user.data.list : []).map(item =>
  //   userQuery(`/user/view/${item.userId}`, item.userId),
  // ));

  const decrease = () => setCount(count - 1);
  const setTitle = () => setSample({ ...sample, title: String(document.querySelector('input')?.value) });

  const [userListError, setUserListError] = useState(true);
  const [boardListError, setBoardListError] = useState(true);

  const resetUserList = () => {
    setUserListError(false);
  };

  const resetBoardList = () => {
    setBoardListError(false);
  };

  return (
    <WebLayout>
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

        <ErrorBoundary
          fallbackRender={ErrorFallbackComponent}
          onReset={resetUserList}
          resetKeys={[userListError]}
        >
          <UserListComponent />
        </ErrorBoundary>

        <ErrorBoundary
          fallbackRender={ErrorFallbackComponent}
          onReset={resetBoardList}
          resetKeys={[boardListError]}
        >
          <BoardListComponent />
        </ErrorBoundary>
      </div>
    </WebLayout>
  );
};

export default AnotherPage;
