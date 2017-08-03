import React, {Component} from 'react'
import Search from './Search.jsx'
import Raindrops from './Raindrops.jsx'
import ResultList from './ResultList.jsx'

export default class Forecast extends Component {
	constructor(props) {
		super(props)
		this.state = {
			animate: false,
			city: '',
			results: [],
      resultsTotal: ''
		}
	}

	handleSubmit() {
    if(this.state.city !== '') {
  		let key = 'APPID=b2139d07e99d08bc22c314f37e836e7d'
  		let api = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
  		let url = `${api}&q=${this.state.city},US&units=imperial&${key}`
  	  fetch(url)
  	  .then(result => result.json())
  	  .then((data) => {
      	this.setState({results: data.list})
  	  })
  	  .catch(err => new Error(console.log('Hit a snag: ' + err)))
    }
  }

	handleChange(event) {
	  this.setState({city: event.target.value})
	}

	render() {
		return(
			<div>
        <Raindrops/>
				<Search
					changeHandler={this.handleChange.bind(this)}
					clickHandler={this.handleSubmit.bind(this)}
					value={this.state.city}
				/>
				<ResultList
					results={this.state.results}
				/>
			</div>
		)
	}
}