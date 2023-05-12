import './App.css';
import React from 'react';
import Colorpicker from './components/colorpicker/colorpicker';

function App() {
  return (
    <div className="App">
      <Colorpicker />
    </div>
  );
}

// NEXT UP:
// 1. connect pointerdown + pointer move and pointer end
// 2. improve styling so that there is no jumping of the pointer
// 3. add a div to display the color

export default App;
