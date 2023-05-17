import './App.css';
import Alphabetical from './components/Alphabetical';
import Conference from './components/Conference';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path='/all' element={<Alphabetical />} />
          <Route exact path='/conference' element={<Conference />} />
          <Route exact path='/' element={<Alphabetical />}  />
        </Routes>
      </header>
    </div>
  );
}

export default App;
