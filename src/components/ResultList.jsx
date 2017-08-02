import React, {Component} from 'react'
import DateFormat from 'dateformat'
import ResultItem from './ResultItem.jsx'
import Row from './Row.jsx'

export default class ResultList extends Component {
	formatDateTime(datestamp, timestamp) {
		let date = DateFormat(datestamp, 'dddd, mmmm d')
		let time = DateFormat(datestamp, 'h:MM TT')
		return date + ' ' + time
	}

	formatTemperature(temperature) {
		return Math.floor((temperature * 1.8) - 459.67)
	}

	render() {
		return(
			<Row className="Results">
				{this.props.results.map((result, index) => (
					<ResultItem {...{
						date: this.formatDateTime(result.dt_txt, result.dt),
						key: index,
						description: result.weather[0].description,
						humidity: result.main.humidity,
						temp: this.formatTemperature(result.main.temp),
						temp_max: this.formatTemperature(result.main.temp_max),
						temp_min: this.formatTemperature(result.main.temp_min)
				  }}/>
				))}
			</Row>
		)
	}
}