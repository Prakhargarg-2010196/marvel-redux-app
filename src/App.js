import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { CardGridLoader } from './components/loader/CardGridLoader';

const CharactersPage=lazy(()=>import('./pages/characters-page/CharactersPage'));
const ComicsPage=lazy(()=>import(  './pages/comics-page/ComicsPage'));
const Header=lazy(()=>import('./components/header/Header'));
const HomePage=lazy(()=>import('./pages/home-page/HomePage'));
const IndividualCharacterPage=lazy(()=>import('./pages/individual-character-page/IndividualCharacterPage'));
const IndividualComicPage=lazy(()=>import('./pages/individual-comic-page/IndividualComicPage'));
const NotFoundPage=lazy(()=>import('./pages/not-found-page/NotFoundPage'));

function App() {
  return (
    <>
    <Router>
    <Header/>
        <Suspense fallback={<CardGridLoader/>}>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route index path="/comicPage" element={<ComicsPage/>}/>
          <Route path="/individualComicPage" element={<IndividualComicPage />} />
          <Route path="/charactersPage" element={<CharactersPage />} />
          <Route path="/individualCharacterPage" element={<IndividualCharacterPage />} />
          <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
        </Suspense>
    </Router></>
    
  );
}

export default App;
