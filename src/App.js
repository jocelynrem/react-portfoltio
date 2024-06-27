import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Portfolio, Resume } from './components/pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
