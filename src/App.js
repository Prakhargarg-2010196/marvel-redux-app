import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CharactersPage from './pages/characters-page/CharactersPage';
import ComicsPage from './pages/comics-page/ComicsPage';
import Header from './components/header/Header';
import IndividualCharacterPage from './pages/individual-character-page/IndividualCharacterPage';
import IndividualComicPage from './pages/individual-comic-page/IndividualComicPage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/'>
          <Route path="comicPage" element={<ComicsPage/>}/>
          <Route path="individualComicPage" element={<IndividualComicPage/>}/>
          <Route path="charactersPage" element={<CharactersPage/>}/>
          <Route path="individualCharacterPage" element={<IndividualCharacterPage/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
        
          
      </Routes>
    </Router></>
    
  );
}

export default App;
