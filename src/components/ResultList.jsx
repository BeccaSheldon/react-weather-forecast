import React, {Component} from 'react'
import DateFormat from 'dateformat'
import ResultItem from './ResultItem.jsx'
import Row from './Row.jsx'

export default class ResultList extends Component {
	formatDate(unixTimestamp) {
		let ms = new Date(unixTimestamp * 1000)
		let formattedDate = DateFormat(ms, 'dddd, mmmm dd')
		return formattedDate
	}

	render() {
		return(
			<Row className="Results">
				{this.props.results.length > 0 && <h3>7 Day Forecast</h3>}
				{this.props.results.map((result, index) => (
					<ResultItem {...{
						date: this.formatDate(result.dt),
						day: Math.round(result.temp.day),
						description: result.weather[0].description,
						eve: Math.round(result.temp.eve),
						humidity: result.humidity,
						key: index,
						max: Math.round(result.temp.max),
						min: Math.round(result.temp.min),
						morn: Math.round(result.temp.morn),
						night: Math.round(result.temp.night),
				  }}/>
				))}
			</Row>
		)
	}
}