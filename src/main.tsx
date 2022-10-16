import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import { queryClient } from '@hooks/queries/factories/queryClient';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.VITE_DEBUG === 'true' && <ReactQueryDevtools initialIsOpen={true} />}
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
