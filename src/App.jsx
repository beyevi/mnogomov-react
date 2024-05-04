import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx';
import PracticePage from './pages/PracticePage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/practice' element={<PracticePage />} />  
          <Route path='/profile' element={<ProfilePage />} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
