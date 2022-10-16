import React from 'react';
import { useRecoilState } from 'recoil';

import { countState, sampleState } from '@states/sampleState';
import InputElement from '@components/elements/InputElement';


const BoardWritePage = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
