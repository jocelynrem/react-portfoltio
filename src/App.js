import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Portfolio, Contact, Resume } from './components/pages';

function App() {
  return (
    <Router>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/portfolio"><Portfolio /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/resume"><Resume /></Route>
    </Router>
  );
}

export default App;
