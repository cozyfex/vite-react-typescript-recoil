import MenuComponent from '@components/menu-component';
import { sampleStore } from '@store/sample-store';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const [sample, setSample] = useRecoilState(sampleStore);

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
