import './App.css';
import TestCard from './test-card';
import Testmicros from './test-micros';
import { Routes, Route } from 'react-router-dom';
import Selector from './components/Selector/Selector'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/cards" element={<TestCard />} />
          <Route path="/macros" element={<Testmicros />} />
          <Route path="/select-diet" element={<Selector />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
