import React, { useEffect, useState } from 'react'
import './colorpicker2D.css'

function Colorpicker2D() {
  const [draggable, setDraggable] = useState(false);
  const [yPosition, setYPosition] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  // draggable
  useEffect(() => {
    console.log(draggable)
  },[draggable])

  // set pointer position
  const setPointerPosition = (e) => {
    if (draggable === true) {
      const square = e.target.getBoundingClientRect()
      const height = ((e.clientY - square.top) / square.height * 100)-1
      const width = ((e.clientX - square.left) / square.width * 100)-1
      console.log([height, width])
      setYPosition(height)
      setXPosition(width)
    } else {
      return
    }
  }

  return (
    <div className="ColorPicker2D">
      <div className="picker-container"
        onPointerMove={e => setPointerPosition(e)}
        onPointerDown={e => setDraggable(true) }
        onPointerUp={e => setDraggable(false)}

      >
        <div className="picker-pointer" style={{ "--handle-y": `${yPosition}%`, "--handle-x": `${xPosition}%` }}></div>
        <div className="bg lr"></div>
        <div className="bg ud"></div>
      </div>
    </div>
  )
}

export default Colorpicker2D
