import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { queryClient } from '@hooks/queries/factories/queryClient';
import BoardWritePage from '@pages/BoardWritePage';
import IndexPage from '@pages/IndexPage';
import AnotherPage from '@pages/AnotherPage';


import '@assets/sass/sample.sass';
import '@assets/sass/sample.scss';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';


const App = () => {
  return (

    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="" element={<IndexPage />} />
          <Route path="another" element={<AnotherPage />} />
          <Route path="board/write" element={<BoardWritePage />} />
        </Routes>
        {import.meta.env.VITE_DEBUG === 'true' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </RecoilRoot>

    // <BrowserRouter>
    // </BrowserRouter>
  );
};

export default App;
