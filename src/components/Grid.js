import React from 'react'
import { cellHeight, cellWidth } from '../config';

const gridStyle = {
  'display': 'block',
  'margin': '50px auto'
}

export default function Grid(props) {
  
  return (
  <svg style={gridStyle} width={props.width} height={props.height}>
    <defs>
      <pattern id="cell" width={cellWidth} height={cellHeight} patternUnits="userSpaceOnUse">
        <path d={`M ${cellHeight} 0 L 0 0 0 ${cellWidth}`} fill="none" stroke="#ADD8E6" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height={props.height} fill="url(#cell)" />
    {props.children}
</svg>);

}
