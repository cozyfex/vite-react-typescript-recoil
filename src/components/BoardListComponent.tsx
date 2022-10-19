import useBoardHttp from '@hooks/queries/useBoardQuery';
import { BoardInterface } from '@interfaces/boardInterface';
import React from 'react';

import { ListInterface } from '@interfaces/listInterface';


const BoardListComponent = () => {
  const boardHttp = useBoardHttp();

  const {
    data,
    error,
    isError,
    isFetched,
    isFetching,
    isLoading,
    isStale,
    isSuccess,
    remove,
    status,
  } = boardHttp.get<ListInterface<BoardInterface[]>>('/board/list', 'list');

  return (
    <React.Fragment>
      {isLoading ? <div>Loading...</div> :
        isSuccess ?
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
              {data.list.map((item, index) =>
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
    </React.Fragment>
  );
};

export default BoardListComponent;
