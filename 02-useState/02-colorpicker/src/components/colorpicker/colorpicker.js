import React from 'react'
import { colorHandler } from './colorhandler'
import { useState } from 'react'
import './colorpicker.css';
import { BsFillClipboardFill } from 'react-icons/bs'

function Colorpicker() {
  const [r, setR] = useState('0')
  const [g, setG] = useState('0')
  const [b, setB] = useState('0')

  function setPointerPosition(e) {
    if (e.target.hasAttribute("disabled") === false) {
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
    } else {
      return
    }
  }

  function allowDrag(e) {
    e.target.removeAttribute("disabled")
  }

  function disableDrag(e) {
    e.target.setAttribute("disabled","")
  }

  return (
    <div className="colorpicker">
      <div className="colorpalette-container">
        <div className="colorpalette" disabled
          // onPointerEnter={e => console.log('onPointerEnter')}
          onPointerMove={e => setPointerPosition(e)}
          // e.clientY
          onPointerDown={e => allowDrag(e)}
          onPointerUp={e => disableDrag(e)}
          // onPointerLeave={e => console.log('onPointerLeave')}
        >
          <div className="pointer"
          />
        </div>
      </div>

      <div className="color-display">
        <div className="square">
          {/* <BsFillClipboardFill className="copytoclip" onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}/> */}
        </div>
        <h1>R:{r}</h1>
        <h1>G:{g}</h1>
        <h1>B:{b}</h1>
        <h2>&#91;{r},{g},{b}&#93;</h2>
      </div>
    </div>
  );
}

export default Colorpicker
