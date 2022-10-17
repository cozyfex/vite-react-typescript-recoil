import React from 'react';
import { useRecoilState } from 'recoil';

import useBoardHttp from '@hooks/queries/useBoardQuery';
import useAxios from '@hooks/useAxios';
import { BoardInterface } from '@interfaces/boardInterface';
import { countState, sampleState } from '@states/sampleState';
import InputElement from '@components/elements/InputElement';


const BoardWritePage = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);

  const api = useAxios();
  const boardHttp = useBoardHttp();
  const boardPostMutation = boardHttp.mutation('board-post', (data: BoardInterface) => api.post('/board/write', data));
  const boardPutMutation = boardHttp.mutation('board-put', (data: BoardInterface) => api.put('/board/write', data));
  const boardDeleteMutation = boardHttp.mutation('board-delete', (boardName: number) => api.delete(`/board/delete/${boardName}`));

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const name = document.getElementById('name') as HTMLInputElement;
    const title = document.getElementById('title') as HTMLInputElement;

    const board: BoardInterface = {
      name: name.value,
      title: title.value,
      readCount: Math.random() * 10,
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
