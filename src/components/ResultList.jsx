import React, {Component} from 'react'
import Row from './Row.jsx'
import ResultItem from './ResultItem.jsx'

export default class ResultList extends Component {
	render() {
		return(
			<Row className="Results">
				{this.props.results.map((result, index) => (
					<ResultItem {...{
						date: result.dt_txt,
						key: index,
						description: result.weather[0].description,
						humidity: result.main.humidity,
						temp: result.main.temp,
						temp_max: result.main.temp_max,
						temp_min: result.main.temp_min
				  }}/>
				))}
			</Row>
		)
	}
}