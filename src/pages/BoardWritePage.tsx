import useBoardHttp from '@hooks/queries/useBoardQuery';
import useAxios from '@hooks/useAxios';
import { IBoard } from '@interfaces/IBoard';
import React from 'react';
import { useRecoilState } from 'recoil';

import { countState, sampleState } from '@states/sampleState';
import InputElement from '@components/elements/InputElement';


const BoardWritePage = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);

  const api = useAxios();
  const boardHttp = useBoardHttp();
  const boardPostMutation = boardHttp.mutation('post', (data: IBoard) => api.post('/board/write', data));
  const boardPutMutation = boardHttp.mutation('put', (data: IBoard) => api.put('/board/write', data));
  const boardDeleteMutation = boardHttp.mutation('delete', (boardName: number) => api.delete(`/board/delete/${boardName}`));

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const board: IBoard = {
      name: 'aaa',
      readCount: 0,
      title: '',
    };

    boardPostMutation.mutate(board);
    boardPutMutation.mutate(board);
    boardDeleteMutation.mutate(20);
  };

  return (
    <div>
      <div>Board Write Page</div>
      <div>{count}</div>
      <div>{sample.title}</div>
      <div>
        <div>
          <label htmlFor="name">name</label>
          <InputElement id="name" />
        </div>
        <div>
          <label htmlFor="title">title</label>
          <InputElement id="title" />
        </div>
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default BoardWritePage;
