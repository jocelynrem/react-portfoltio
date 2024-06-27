//src/App.js

import { Routes, Route } from 'react-router-dom';
import { Home, Portfolio, Resume } from './components/pages';

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
