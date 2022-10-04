import BaseLayout from '@layouts/base-layout';
import IndexPage from '@pages/index-page';
import AnotherPage from '@pages/another-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="" element={<IndexPage />} />
          <Route path="another" element={<AnotherPage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
