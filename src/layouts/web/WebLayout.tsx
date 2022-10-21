import React, { useEffect, Suspense } from 'react';
import { useRecoilState } from 'recoil';
import { InfinitySpin } from 'react-loader-spinner';

import BaseLayout from '@layouts/BaseLayout';
import { sampleState } from '@states/sampleState';

const MenuComponent = React.lazy(() => import('@components/MenuComponent'));

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  const [sample, setSample] = useRecoilState(sampleState);

  useEffect(() => {
    if (sample.title) document.title = sample.title;
  }, [sample.title]);

  return (
    <BaseLayout>
      <Suspense fallback={<InfinitySpin width="200" color="#4fa94d" />}>
        <MenuComponent />
      </Suspense>
      {children}
    </BaseLayout>
  );
};

export default WebLayout;
