import React from 'react';
import logo from './forgetmenot.png';
import './App.scss';
import NavBar from './components/NavBar';
import HomepageCarousel from './components/HomepageCarousel/HomepageCarousel';

function App() {
  return (
    <div>
        <NavBar
        />
        <HomepageCarousel
        />
      </div>
  );
}

export default App;
