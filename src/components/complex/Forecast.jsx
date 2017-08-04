import React, {Component} from 'react'
import Loading from '../basic/Loading.jsx'
import ResultTable from './ResultTable.jsx'
import Search from './Search.jsx'

export default class Forecast extends Component {
	constructor(props) {
		super(props)
		this.state = {
			city: '',
			loading: false,
			results: []
		}
	}

	clearInput() {
		console.log("How do we clear inputs in React?")
	}

	isValidQuery() {
		return this.state.city !== '' && this.sate.city !== ' ' && this.state.city !== undefined ? true : false
	}

	handleSubmit() {
	  let cachedCity = localStorage.getItem(this.state.city)

	  this.setState({loading: true})

	  // Check if results already cached for city for 1 day only
		if (cachedCity) {
			this.setState({
				loading: false,
				results: JSON.parse(cachedCity)
			})
		}

		// If city isn't in cache, fetch it + add to localstorage
    if (this.isValidQuery) {
  		let apikey = 'APPID=b2139d07e99d08bc22c314f37e836e7d'
  		let api = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
  		let url = `${api}&q=${this.state.city},US&units=imperial&${apikey}`
  	  fetch(url)
  	  .then(result => result.json())
  	  .then((data) => {
      	this.setState({
      		loading: false,
      		results: data.list
      	})
      	localStorage.setItem(this.state.city, JSON.stringify(this.state.results))
      	this.clearInput()
  	  })
  	  .catch(err => new Error(console.log('Hit a snag: ' + err)))
    }
  }

	handleChange(event) {
	  this.setState({city: event.target.value})
	}

	unmountLanding() {
		console.log("How do we teardown Landing so it can be replaced?")
	}

	render() {
		return(
			<div>
        <h3>Type in a city name to get the weekly forecast</h3>
				<Search
					changeHandler={this.handleChange.bind(this)}
					clickHandler={this.handleSubmit.bind(this)}
					value={this.state.city}
				/>
				{this.state.loading && <Loading />}
				{!this.state.loading &&
					<ResultTable
						city={this.state.city}
						results={this.state.results}
					/>
				}
			</div>
		)
	}
}