import './App.scss';
import Navigation from './components/navigation/Navigation';
import Learnaboutus from './components/Learn-about-us/Learn-about-us';
import Hero from './components/Hero/Hero';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navigation />
      <div className="home" id="home">
        <Hero />
      </div>

      <div className='learn-about-us' id="learn-about-us">
        <Learnaboutus />
      </div>

      <div className='exercises' id='exercises'>

      </div>

      <div className='the-team' id='the-team'>

      </div>
    </div>
  );
}

export default App;
