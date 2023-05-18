import './App.css';
import React from 'react';
import ColorpickerRGB from './components/ColorpickerRGB/ColorpickerRGB';
import ColorpickerHSL from './components/ColorpickerHSL/ColorpickerHSL';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Colorpicker2D from './components/Colorpicker2D/Colorpicker2D';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ColorpickerRGB />} />
        <Route path="/2d" element={<Colorpicker2D />} />
        <Route path="/hsl" element={<ColorpickerHSL />} />
      </Routes>
    </div>
  );
}

// NEXT UP:
// 1. connect pointerdown + pointer move and pointer end
// 2. improve styling so that there is no jumping of the pointer
// 3. add a div to display the color

export default App;
