// App.js
import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Salary from './Components/Salary';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/salary" element={<Salary/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

