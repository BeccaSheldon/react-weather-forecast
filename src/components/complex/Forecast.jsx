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

	handleSubmit() {
	  this.setState({loading: true})
	  this.unmountLanding()

    if(this.state.city !== '') {
  		let key = 'APPID=b2139d07e99d08bc22c314f37e836e7d'
  		let api = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
  		let url = `${api}&q=${this.state.city},US&units=imperial&${key}`
  	  fetch(url)
  	  .then(result => result.json())
  	  .then((data) => {
      	this.setState({
      		loading: false,
      		results: data.list
      	})
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