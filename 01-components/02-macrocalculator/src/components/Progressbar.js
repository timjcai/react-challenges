import React from 'react'
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

function Progressbar() {
  const props = {
    percent: 80,
    colorSlice: "#00a1ff",
    colorCircle: "#00111f",
    fontColor: "#365b74",
    fontSize: "1.6rem",
    fontWeight: 400,
    // size: 200,
    stroke: 10,
    strokeBottom: 5,
    speed: 60,
    cut: 0,
    rotation: -90,
    // fill: "#00897B",
    unit: "%",
    textPosition: "0.35em",
    // animationOff: false,
    strokeDasharray: "10,1",
    inverse: false,
    round: false,
    number: true,
    linearGradient: ["#ffff00", "brown"],
    styles: {
      borderRadius: "50%",
      boxShadow: "inset 0 0 25px 10px #a2caff"
    }
  };

  return (
    <div>
      <CircularProgressBar {...props} />
    </div>
  )
}

export default Progressbar
