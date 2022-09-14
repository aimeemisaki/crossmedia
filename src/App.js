import './App.css';
import Bonsai from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Bonsai from './components/Bonsai';
import Shodo from './components/Shodo';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <main>
          <Routes>
            <Route path ='/about' element={<About />}/>
            <Route path='/home' element={<CarouselContainer data={data} />}/>
            <Route path='*' element={<Navigate to ='/home' />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
