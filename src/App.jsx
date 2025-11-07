import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Agenda from './Components/Agenda'
import Contact from './Components/Contact'

function App() {
  return (
    <>
     <Header/>
      <Hero/>
      <About/>
      <Agenda/>
      <Contact/>
    </>    
  );
}

export default App;
