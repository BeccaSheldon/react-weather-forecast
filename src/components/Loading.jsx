import React from 'react'
import Spinner from 'react-spinkit'
import Row from './Row.jsx'

export default function Loading({}) {
	return(
		<Row className="Loading">
		  <Spinner name="ball-pulse-rise" color="#19DFE8" />
		  <Spinner name="ball-pulse-rise" color="#FC8F8A" />
		  <Spinner name="ball-pulse-rise" color="#19DFE8" />
		</Row>
	)
}
