import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
