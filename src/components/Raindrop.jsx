import React from 'react'

export default function Raindrop({d, cx, cy, rx, ry}) {
	return(
		<g className="drop">
		  <path d={d}/>
		  <ellipse cx={cx} cy={cy} rx={rx} ry={ry}/>
		</g>
	)
}