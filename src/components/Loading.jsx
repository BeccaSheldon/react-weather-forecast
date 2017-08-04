import React from 'react'
import Spinner from 'react-spinkit'
import Row from './Row.jsx'

export default function Loading({}) {
	return(
		<Row className="Loading">
		  <Spinner name="ball-pulse-rise" color="#19DFE8" />
		  <Spinner name="ball-pulse-rise" color="#38F6CB" />
		  <Spinner name="ball-pulse-rise" color="#49D1F9" />
		</Row>
	)
}
