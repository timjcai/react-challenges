import '../styles/grid.css';
import Gridcell from './gridcell';
import {useEffect, useState} from 'react'

function Grid3x3(array) {
  const [cells, setCells] = useState(null)

  return (
    <div className="Grid3x3">
      <Gridcell input = {1} />
      <Gridcell input = {2} />
      <Gridcell input = {3} />
      <Gridcell input = {4} />
      <Gridcell input = {5} />
      <Gridcell input = {6} />
      <Gridcell input = {7} />
      <Gridcell input = {8} />
      <Gridcell input = {9} />
    </div>
  );
}

export default Grid3x3;
