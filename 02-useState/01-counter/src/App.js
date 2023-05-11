import './App.css';
import React from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{ count }</h2>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}

export default App;
