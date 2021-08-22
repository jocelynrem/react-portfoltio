import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Portfolio, Contact, Resume } from './components/pages';

function App() {
  return (
    <Router>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/resume" element={<Resume />} />
    </Router>
  );
}

export default App;
