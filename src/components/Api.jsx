import React from 'react'
import dateFormat from 'dateformat'

export default function Api(city) {
	console.log('Api City: ', city)
	const key = 'APPID=b2139d07e99d08bc22c314f37e836e7d'
	const api = 'http://api.openweathermap.org/data/2.5/forecast?'
	let url = `${api}&id=${city}&${key}`

  fetch(url)
	.then(result => result.json())
  .then((data) => {
    return data
  })
	.catch(err => new Error(console.log('Hit a snag reaching API endpoint! Error code: ' + err)))
}