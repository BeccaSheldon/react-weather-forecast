import React, {Component} from 'react'
import Loading from './Loading.jsx'
import ResultList from './ResultList.jsx'
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
      	this.clearInput
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
				<Search
					changeHandler={this.handleChange.bind(this)}
					clickHandler={this.handleSubmit.bind(this)}
					value={this.state.city}
				/>
				{this.state.loading && <Loading />}
				{!this.state.loading &&
					<ResultList
						city={this.state.city}
						results={this.state.results}
					/>
				}
			</div>
		)
	}
}