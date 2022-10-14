import MenuComponent from '@components/MenuComponent';
import { sampleState } from '@states/sampleState';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const [sample, setSample] = useRecoilState(sampleState);

  useEffect(() => {
    if (sample.title) document.title = sample.title;
  }, [sample.title]);

  return (
    <div className="content">
      <MenuComponent />
      {children}
    </div>
  );
};

export default BaseLayout;
