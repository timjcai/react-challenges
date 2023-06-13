import React from 'react';
import './App.css';
import Frame from './components/common/Frame/Frame';
import SelectorButton from './components/SelectorButton/SelectorButton'
import Background from './components/common/Frame/Background';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <div>
          <SelectorButton iconbrand={ 'Paypal' } name={'paymentbrands'} />
          <SelectorButton iconbrand={ 'Googlepay' } name={'paymentbrands'}/>
          <SelectorButton iconbrand={'Applepay'} name={'paymentbrands'} />
          <SelectorButton companylogo={ 'Up' } name={'bankingbrands'}/>
          <SelectorButton companylogo={'CBA'} name={'bankingbrands'} />
          <SelectorButton companylogo={'ANZ'} name={'bankingbrands'} />
          <SelectorButton companylogo={'Macquarie'} name={'bankingbrands'} />
        </div>
      </header>
    </div>
  );
}

export default App;
