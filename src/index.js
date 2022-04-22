import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/'  element={ <App />} />
        <Route path='/About' element={ <About/>} />
        <Route path='/Home' element={ <Home/>} />
        

   
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);