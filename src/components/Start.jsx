import React, {Component} from 'react'
import Landing from './Landing.jsx'
import Row from './Row.jsx'

export default class Start extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentCity: '',
			currentCondition: '',
			currentTemperature: '',
	    weatherIcon: '',
	    loading: true
		}
	}

	start() {
		navigator.geolocation.getCurrentPosition((position) => {
			let key = 'APPID=b2139d07e99d08bc22c314f37e836e7d'
			let api = 'http://api.openweathermap.org/data/2.5/weather?'
			let lat = position.coords.latitude
			let lon = position.coords.longitude
			let url = `${api}&lat=${lat}&lon=${lon}&units=imperial&${key}`

			fetch(url)
		  .then(result => result.json())
		  .then((data) => {
	    	this.setState({
	    		currentCity: data.name,
	    		currentCondition: data.weather[0].description,
	    		currentTemperature: Math.round(data.main.temp),
	    		weatherIcon: data.weather[0].icon,
	    		loading: false
	    	})
		  })
	  	.catch(err => new Error(console.log('Hit a snag: ' + err)))
		})
	}

	componentDidMount() {
		this.start()
	}

  render() {
  	return(
  		<Row className="Start">
				<Landing {...{
					currentCity: this.state.currentCity,
					currentCondition: this.state.currentCondition,
					currentTemperature: this.state.currentTemperature,
					loading: this.state.loading
			  }} />
			</Row>
  	)
  }
}