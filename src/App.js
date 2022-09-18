import './App.css';
import Home from './components/Home';
import About from './components/About'
import Navigation from './components/Navigation';
import Bonsai from './components/Bonsai';
import Shodo from './components/Shodo';
import Contact from './components/Contact';
import Schedule from './components/Schedule';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path ='/about' element={<About />}/>
            <Route path='/bonsai' element={<Bonsai />}/>
            <Route path ='/shodo' element={<Shodo />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/schedule' element={<Schedule />}/>
            <Route path ='*' element={<Navigate to ='/' />}/>
          </Routes>
      </main>
    </>
  );
}

export default App;
