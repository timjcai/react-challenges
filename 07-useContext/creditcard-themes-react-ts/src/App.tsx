import React from 'react';
import './App.css';
import Frame from './components/common/Frame/Frame';
import PaymentButton from './components/PaymentButton/PaymentButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PaymentButton/>
      </header>
    </div>
  );
}

export default App;
