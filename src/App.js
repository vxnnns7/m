import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/Homepage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProfilePage from './components/Profile/Profile';
import InstructionPage from './components/InstructionPage/InstructionPage';
import TutorialsPage from './components/TutorialsPage/TutorialsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/instructions' element={<InstructionPage />}/>
        <Route path='/tutorials' element={<TutorialsPage />}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
