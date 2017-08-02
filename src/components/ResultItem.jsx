import React, {Component} from 'react'

export default class ResultItem extends Component {
	render() {
		return (
			<div className="Result-item">
				<ul>
					<li className="Result-item-heading">Forecast for: {this.props.date} </li>
					<li>Description: {this.props.description}</li>
					<li>Humidity: {this.props.humidity}</li>
					<li>Temperature: {this.props.temp}</li>
					<li>Max: {this.props.temp_max}</li>
					<li>Min: {this.props.temp_min}</li>
				</ul>
			</div>
		)
	}
}