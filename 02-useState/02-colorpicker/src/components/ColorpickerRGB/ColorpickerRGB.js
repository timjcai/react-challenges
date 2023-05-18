import React from 'react'
import { createRGBValues } from './ColorhandlerRGB'
import { useState } from 'react'
import './colorpicker.css';

function ColorpickerRGB() {
  const [r, setR] = useState('0')
  const [g, setG] = useState('0')
  const [b, setB] = useState('0')
  const [draggable, setDraggable] = useState(false);
  const [pointer, setPointer] = useState(0);

  function limitPosition0to100(value) {
    if (value < 0) {
      return 0
    } else if (value > 100) {
      return 100
    } else {
      return value
    }
  }

  function setPointerPosition(e) {
    if (draggable === true) {
      const length = e.target.getBoundingClientRect()
      const percentageNum = limitPosition0to100((e.clientY - length.top) / length.height * 100)
      setR(createRGBValues(percentageNum)[0])
      setG(createRGBValues(percentageNum)[1])
      setB(createRGBValues(percentageNum)[2])
      setPointer(percentageNum)
    } else {
      return
    }
  }

  return (
    <div className="colorpicker">
      <div className="colorpalette-container">
        <div className={`colorpalette ${draggable && "draggable"}`}
          onPointerMove={e => setPointerPosition(e)}
          onPointerDown={e => setDraggable(true)}
          onPointerUp={e => setDraggable(false)}
        >
          <div className="pointer" style={{ "--handle-position": `${pointer}%` }}
          />
        </div>
      </div>

      <div className="color-display">
        <div className="square" style={{ "--handle-color": `rgb(${ r },${g},${b})` }}>
        </div>
        <h1>R:{r}</h1>
        <h1>G:{g}</h1>
        <h1>B:{b}</h1>
        <h2>rgb&#40;{r},{g},{b}	&#41;</h2>
      </div>
    </div>
  );
}

export default ColorpickerRGB
