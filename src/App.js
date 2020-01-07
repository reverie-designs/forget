import React from 'react';
import logo from './forgetmenot.png';
import Map from './MapComponent/component/Map';
import './App.scss';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import HomepageCarousel from './components/HomepageCarousel/HomepageCarousel';

function App() {
  return (
    <div>
        <NavBar
        />
        <SignIn
        />
        <HomepageCarousel
        />
      </div>
  );
}

export default App;
