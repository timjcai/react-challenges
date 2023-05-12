import React from 'react'
import { colorHandler } from './colorhandler'
import { useState } from 'react'
import './colorpicker.css';

function Colorpicker() {
  const [r, setR] = useState('0')
  const [g, setG] = useState('0')
  const [b, setB] = useState('0')

  function setPointerPosition(e) {
    const length = e.target.getBoundingClientRect()
    const pointer = document.querySelector('.pointer')
    const square = document.querySelector('.square')
    const percentageNum = (e.clientY - length.top) / length.height * 100
    const rValue = colorHandler(percentageNum)[0]
    const gValue = colorHandler(percentageNum)[1]
    const bValue = colorHandler(percentageNum)[2]
    setR(rValue)
    setG(gValue)
    setB(bValue)
    square.style.setProperty("--handle-color", `rgb(${rValue},${gValue},${bValue})`)
    pointer.style.setProperty("--handle-position", `${percentageNum}%`)
  }

  return (
    <div className="colorpicker">
      <div className="colorpalette-container">
        <div className="colorpalette"
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
      </div>

      <div className="color-display">
        <div className="square"></div>
        <h1>R:{r}</h1>
        <h1>G:{g}</h1>
        <h1>B:{b}</h1>
        <h2>&#91;{r},{g},{b}&#93;</h2>
      </div>
    </div>
  );
}

export default Colorpicker
