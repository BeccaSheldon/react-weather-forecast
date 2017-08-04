import React, {Component} from 'react'

function Api({city}) {
	let key = 'APPID=b2139d07e99d08bc22c314f37e836e7d'
	let api = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
	let url = `${api}&q=${city},US&units=imperial&${key}`
  fetch(url)
  .then(result => result.json())
  .then((data) => {
  	return data.list
  })
	.catch(err => new Error(console.log('Hit a snag: ' + err)))
}

export default Api
