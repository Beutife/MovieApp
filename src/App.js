import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Hero from './components/hero';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './page/landing';
import Nopage from './page/nopage';
import Movie from './page/movie';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Landing />} />
        <Route path='/' element = {<Hero/>} />
        <Route path='/movies/:id' element = {< Movie />} />
        <Route path='*' element = {<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
