import React, {Component} from 'react'
import Forecast from './Forecast.jsx'
import Row from './Row.jsx'
import Spinner from 'react-spinkit'

export default class Landing extends Component {
	render() {
		return(
			<div className="Landing">
  			<Row className="Weather">
  				{this.props.loading  && <Spinner name="pacman" color="orange" />}
  				{!this.props.loading &&
  					<p>It is currently {this.props.currentTemperature} degrees and {this.props.currentCondition} in {this.props.currentCity}</p>
  				}
  			</Row>
  			<Forecast />
			</div>
		)
	}
}