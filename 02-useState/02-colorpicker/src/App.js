import './App.css';
import { useState } from 'react';
import React from 'react';
import { colorHandler } from './colorhandler';

function App() {
  const [r, setR] = useState('0')
  const [g, setG] = useState('0')
  const [b, setB] = useState('0')

  function setPointerPosition(e) {
    const length = e.target.getBoundingClientRect()
    const pointer = document.querySelector('.pointer')
    const percentageNum = (e.clientY - length.top) / length.height * 100
    setR(colorHandler(percentageNum)[0])
    setG(colorHandler(percentageNum)[1])
    setB(colorHandler(percentageNum)[2])
    pointer.style.setProperty("--handle-position", `${percentageNum}%`)
  }

  return (
    <div className="App">
      <div className="colorpicker"
        // onPointerEnter={e => console.log('onPointerEnter')}
        // onPointerMove={e => console.log(e)}
        // e.clientY
        onPointerDown={e => setPointerPosition(e)}
        // onPointerUp={e => console.log('onPointerUp')}
        // onPointerLeave={e => console.log('onPointerLeave')}
      >
        <div className="pointer"

          // onPointerMove={e => console.log('onPointerMove')}
          // onPointerDown={e => console.log('onPointerDown')}
          // onPointerUp={e => console.log('onPointerUp')}
          // onPointerLeave={e => console.log('onPointerLeave')}
        />
      </div>
      <div>
        <h1>R:{r}</h1>
        <h1>G:{g}</h1>
        <h1>B:{b}</h1>
        <h2>&#91;{r},{g},{b}&#93;</h2>
      </div>
    </div>
  );
}

// NEXT UP:
// 1. connect pointerdown + pointer move and pointer end
// 2. improve styling so that there is no jumping of the pointer
// 3. add a div to display the color

export default App;
