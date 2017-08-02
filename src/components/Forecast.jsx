import React, {Component} from 'react'
import Search from './Search.jsx'
import ResultList from './ResultList.jsx'

export default class Forecast extends Component {
	constructor(props) {
		super(props)
		this.state = {
			city: '',
			results: [],
      resultsTotal: ''
		}
	}

	handleSubmit() {
    if(this.state.city !== '') {
  		let key = 'APPID=b2139d07e99d08bc22c314f37e836e7d'
  		let api = 'http://api.openweathermap.org/data/2.5/forecast?'
  		let url = `${api}&q=${this.state.city},US&cnt=3&${key}`

  	  fetch(url)
  	  .then(result => result.json())
  	  .then((data) => {
	  	  console.log(data.list)
      	this.setState({results: data.list})
  	  })
  	  .catch(err => new Error(console.log('Hit a snag: ' + err)))
  	  console.log(this.state.results)
    }
  }

	handleChange(event) {
	  this.setState({city: event.target.value})
	  console.log('city: ', this.state.city)
	}

	render() {
		return(
			<div>
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