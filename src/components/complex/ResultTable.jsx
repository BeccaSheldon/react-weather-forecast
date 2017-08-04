import React, {Component} from 'react'
import DateFormat from 'dateformat'
import ResultRow from './ResultRow.jsx'
import Row from '../layout/Row.jsx'

export default class ResultTable extends Component {
	formatDate(unixTimestamp) {
		let ms = new Date(unixTimestamp * 1000)
		let formattedDate = DateFormat(ms, 'mmmm d')
		return formattedDate
	}

	render() {
		return(
			<Row className="Results">
				{this.props.results.length > 0 &&
					<table className="Result-table">
						<thead>
							<tr>
								<th className="Result-header">Date</th>
								<th className="Result-header"></th>
								<th className="Result-header">Condition</th>
								<th className="Result-header">High</th>
								<th className="Result-header">Low</th>
								<th className="Result-header">Humidity</th>
							</tr>
						</thead>
						<tbody>
							{this.props.results.map((result, index) => (
								<ResultRow {...{
									date: this.formatDate(result.dt),
									description: result.weather[0].description,
									humidity: result.humidity,
									key: index,
									max: Math.round(result.temp.max),
									min: Math.round(result.temp.min),
									icon: result.weather[0].icon
							  }} />
							))}
						</tbody>
					</table>
				}
			</Row>
		)
	}
}