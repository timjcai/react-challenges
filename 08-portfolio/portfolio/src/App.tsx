import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'

const labeldata = ['portfolio','contact']

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar labels={ labeldata } />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
