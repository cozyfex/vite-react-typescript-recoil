import BaseLayout from '@layouts/base-layout';
import BoardWritePage from '@pages/BoardWritePage';
import IndexPage from '@pages/IndexPage';
import AnotherPage from '@pages/AnotherPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="" element={<IndexPage />} />
          <Route path="another" element={<AnotherPage />} />
          <Route path="board/write" element={<BoardWritePage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
