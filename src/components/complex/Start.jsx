import React, {Component} from 'react'
import Landing from './Landing.jsx'
import Row from '../layout/Row.jsx'

export default class Start extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentCity: '',
			currentCondition: '',
			currentTemperature: '',
			lat: '',
	    loading: true,
	    lon: '',
	    icon: ''
		}
	}

	getUserLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				lat: position.coords.latitude,
				lon: position.coords.longitude
			})
		})
	}

	makeUrl() {
		let key = 'APPID=b2139d07e99d08bc22c314f37e836e7d'
		let api = 'http://api.openweathermap.org/data/2.5/weather?'
		let url = `${api}&q='sanfrancisco'&units=imperial&${key}`

		this.state.lat !== '' ? url = `${api}&lat=${this.state.lat}&lon=${this.state.lon}&units=imperial&${key}` : url
		return url
	}

	start() {
		this.getUserLocation()
		let url = this.makeUrl()
		fetch(url)
	  .then(result => result.json())
	  .then((data) => {
    	this.setState({
    		currentCity: data.name,
    		currentCondition: data.weather[0].description,
    		currentTemperature: Math.round(data.main.temp),
    		icon: data.weather[0].icon,
    		loading: false
    	})
	  })
  	.catch(err => new Error(console.log('Hit a snag: ' + err)))
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
					loading: this.state.loading,
					icon: this.state.icon
			  }} />
			</Row>
  	)
  }
}