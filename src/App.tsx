import BoardWritePage from '@pages/BoardWritePage';
import IndexPage from '@pages/IndexPage';
import AnotherPage from '@pages/AnotherPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@assets/sass/sample.sass';
import '@assets/sass/sample.scss';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<IndexPage />} />
        <Route path="another" element={<AnotherPage />} />
        <Route path="board/write" element={<BoardWritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
