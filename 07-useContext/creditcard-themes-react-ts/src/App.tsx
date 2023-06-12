import React from 'react';
import './App.css';
import Frame from './components/common/Frame/Frame';
import SelectorButton from './components/SelectorButton/SelectorButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SelectorButton brand={'Paypal'} name={'paymentbrands'} />
        <SelectorButton brand={'Googlepay'} name={'paymentbrands'}/>
        <SelectorButton brand={ 'Applepay' } name={'paymentbrands'}/>
      </header>
    </div>
  );
}

export default App;
