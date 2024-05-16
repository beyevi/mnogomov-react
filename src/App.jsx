import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage.jsx';
import PracticePage from './pages/PracticePage/PracticePage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import DictionaryPage from './pages/DictionaryPage/DictionaryPage.jsx';
import WelcomePage from './pages/WelcomePage/WelcomePage.jsx';

import { DictionaryProvider } from './context/DictionaryContext';
import Question from './components/Question/Question.jsx';

function App() {

  return (
    <>
      <DictionaryProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/practice' element={<PracticePage />} />  
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/dictionary' element={<DictionaryPage />}/>
            <Route path='/main/lesson' element={<Question />}/>
          </Routes>
        </BrowserRouter>
      </DictionaryProvider>
    </>
  );
}

export default App
