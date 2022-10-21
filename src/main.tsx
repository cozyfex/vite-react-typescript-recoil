import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './App';

const container = document?.getElementById('root');
const AppWrapper = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<AppWrapper />);
} else {
  hydrateRoot(container!, <AppWrapper />);
}
