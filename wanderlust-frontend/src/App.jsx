import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar'
import HomePage from './components/Home/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
