import React from 'react';
import './App.css';
import Frame from './components/common/Frame/Frame';
import SelectorButton from './components/SelectorButton/SelectorButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SelectorButton iconbrand={ 'Paypal' } name={'paymentbrands'} />
        <SelectorButton iconbrand={ 'Googlepay' } name={'paymentbrands'}/>
        <SelectorButton iconbrand={'Applepay'} name={'paymentbrands'} />
        <SelectorButton companylogo={ 'Up' } name={'bankingbrands'}/>
      </header>
    </div>
  );
}

export default App;
