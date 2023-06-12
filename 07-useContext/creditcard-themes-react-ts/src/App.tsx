import React from 'react';
import './App.css';
import Frame from './components/common/Frame/Frame';
import PaymentButton from './components/PaymentButton/PaymentButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PaymentButton brand={'Paypal'} name={'paymentbrands'} />
        <PaymentButton brand={'Googlepay'} name={'paymentbrands'}/>
        <PaymentButton brand={ 'Applepay' } name={'paymentbrands'}/>
      </header>
    </div>
  );
}

export default App;
