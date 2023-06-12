import React from 'react';
import './App.css';
import Frame from './components/common/Frame/Frame';
import PaymentButton from './components/PaymentButton/PaymentButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PaymentButton brand={'Paypal'} />
        <PaymentButton brand={'Googlepay'} />
        <PaymentButton brand={ 'Applepay' } />
      </header>
    </div>
  );
}

export default App;
