import './App.css';
import Alphabetical from './components/Alphabetical';
import Conference from './components/Conference';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rankings from './components/Rankings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Alphabetical />} />
          <Route exact path='/conference' element={<Conference />} />
          <Route exact path='/rankings' element={<Rankings />}  />
        </Routes>
      </header>
    </div>
  );
}

export default App;
