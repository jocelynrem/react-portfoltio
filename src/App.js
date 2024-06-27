import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
